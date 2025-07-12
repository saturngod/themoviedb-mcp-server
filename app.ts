import express, { Request, Response } from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import cors from 'cors';
import { popularTool, now_playing_movie, movie_detail, cast_list, search_movie } from './tools.js';

/**
 * This example server demonstrates the deprecated HTTP+SSE transport 
 * (protocol version 2024-11-05). It mainly used for testing backward compatible clients.
 * 
 * The server exposes two endpoints:
 * - /mcp: For establishing the SSE stream (GET)
 * - /:sessionId/messages: For receiving client messages (POST)
 */

// Create an MCP server instance
const getServer = () => {
  const server = new McpServer({
    name: 'imdb-mcp-server',
    version: '1.0.0',
  }, { capabilities: { logging: {} } });

  popularTool(server);
  now_playing_movie(server);
  movie_detail(server);
  cast_list(server);
  search_movie(server);
  return server;
};

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Store transports by session ID
const transports: Record<string, SSEServerTransport> = {};

// SSE endpoint for establishing the stream
app.get('/mcp', async (req: Request, res: Response) => {
  console.log('Received GET request to /mcp (establishing SSE stream)');

  try {
    // Set SSE headers
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Cache-Control'
    });

    // Create a new SSE transport for the client
    const transport = new SSEServerTransport('/messages', res);

    // Store the transport by session ID
    const sessionId = transport.sessionId;
    transports[sessionId] = transport;
    console.log(`[SSE] Transport created for sessionId: ${sessionId}`);

    // Set up onclose handler to clean up transport when closed
    transport.onclose = () => {
      console.log(`SSE transport closed for session ${sessionId}`);
      delete transports[sessionId];
      console.log(`[SSE] Transport deleted for sessionId: ${sessionId}`);
    };

    // Connect the transport to the MCP server
    const server = getServer();
    await server.connect(transport);
    console.log(`[SSE] Server connected to transport for sessionId: ${sessionId}`);
    res.write('');
    // Send endpoint as a plain string event with sessionId in path
    // res.write(`event: endpoint\ndata: /${sessionId}/messages\n\n`);
    // // Send sessionId as a plain string event
    // res.write(`event: session\ndata: ${sessionId}\n\n`);
    console.log(`[SSE] Initial endpoint and session events sent for sessionId: ${sessionId}`);

    console.log(`Established SSE stream with session ID: ${sessionId}`);
  } catch (error) {
    console.error('Error establishing SSE stream:', error);
    if (!res.headersSent) {
      res.status(500).send('Error establishing SSE stream');
    }
  }
});

// Messages endpoint for receiving client JSON-RPC requests
app.post('/messages', async (req: Request, res: Response) => {
  console.log('Received POST request to /messages');

  console.log(`[POST] Query:`, req.query);
  console.log(`[POST] Body:`, req.body);
  console.log(`[POST] Headers:`, req.headers);
  console.log(`[POST] Request method:`, req.method);
  console.log(`[POST] Request URL:`, req.url);

  // Extract session ID from query string
  const sessionId = req.query.sessionId as string | undefined;
  console.log(`[POST] Extracted sessionId from query: ${sessionId}`);

  if (!sessionId) {
    console.error('No session ID provided in query string');
    res.status(400).json({ error: 'Missing sessionId parameter' });
    return;
  }

  const transport = transports[sessionId];
  if (!transport) {
    console.error(`[POST] No active transport found for session ID: ${sessionId}`);
    console.log(`[POST] Current transports:`, Object.keys(transports));
    res.status(404).json({ error: 'Session not found' });
    return;
  }

  try {
    // Handle the POST message with the transport
    console.log(`[POST] Handling message for sessionId: ${sessionId}`);
    await transport.handlePostMessage(req, res, req.body);
    console.log(`[POST] Message handled for sessionId: ${sessionId}`);
  } catch (error) {
    console.error('Error handling request:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Error handling request' });
    }
  }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Simple SSE Server (deprecated protocol version 2024-11-05) listening on port ${PORT}`);
});

// Handle server shutdown gracefully
const shutdown = async () => {
  console.log('Shutting down server...');

  // Close all active transports to properly clean up resources
  for (const sessionId in transports) {
    try {
      console.log(`Closing transport for session ${sessionId}`);
      await transports[sessionId].close();
      delete transports[sessionId];
    } catch (error) {
      console.error(`Error closing transport for session ${sessionId}:`, error);
    }
  }

  // Close the HTTP server
  server.close(() => {
    console.log('Server shutdown complete');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);