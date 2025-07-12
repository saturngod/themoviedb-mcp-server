# The Movie DB MCP Server

Sample for how to create MCP server. Using the The Movie DB API.

Before starting, create

```
.env
```

In the `.env`, add the The Movie DB token

```
token=YOUR_API_TOKEN
```

## Run the server

```
bun app.ts
```

The server will run `http://localhost:3000/mcp`.

Add the MCP server in your client.

```
{
    "imdb-mcp": {
			"url": "http://localhost:3000/mcp",
      		"type": "sse"
		}
}
```
