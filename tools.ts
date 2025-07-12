export function search_movie(server: any) {
  const imdbApi = new IMDBApi();
  server.tool(
    'search_movie',
    'Search the movies',
    {
      query: z.string().describe('Search query string'),
      page: z.number().int().describe('Page number').default(1),
      language: z.string().describe('Language code, e.g. en-US').default('en-US'),
      year: z.number().int().optional().describe('Year of release (optional, default empty)'),
    },
    async ({ query, page, language, year }: { query: string; page: number; language: string; year?: number }): Promise<CallToolResult> => {
      try {
        const data = await imdbApi.searchMovies(query, language, page, year);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}

import { z } from 'zod';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { IMDBApi } from './imdbApi.js';

export function popularTool(server: any) {
  const imdbApi = new IMDBApi();
  server.tool(
    'popular_movie',
    'List of the popular movie',
    {
      language: z.string().describe('Language code, e.g. en-US').default('en-US'),
      page: z.number().int().describe('Page number').default(1),
    },
    async ({ language, page }: { language: string; page: number }): Promise<CallToolResult> => {
      try {
        const data = await imdbApi.getPopularMovies(language, page);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}

export function now_playing_movie(server: any) {
  const imdbApi = new IMDBApi();
  server.tool(
    'now_playing_movie',
    'What movies are currently available and playing in theaters?',
    {},
    async (): Promise<CallToolResult> => {
      try {
        const data = await imdbApi.getNowPlayingMovies();
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}
  
export function movie_detail(server: any) {
  const imdbApi = new IMDBApi();
  server.tool(
    'movie_detail',
    'Show the movie detail information',
    {
      movie_id: z.number().int().describe('Movie ID'),
      language: z.string().describe('Language code, e.g. en-US').default('en-US'),
    },
    async ({ movie_id, language }: { movie_id: number; language: string }): Promise<CallToolResult> => {
      try {
        const data = await imdbApi.getMovieDetail(movie_id, language);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}

export function cast_list(server: any) {
  const imdbApi = new IMDBApi();
  server.tool(
    'cast_list',
    'Show the movie cast list and crew list',
    {
      movie_id: z.number().int().describe('Movie ID'),
      language: z.string().describe('Language code, e.g. en-US').default('en-US'),
    },
    async ({ movie_id, language }: { movie_id: number; language: string }): Promise<CallToolResult> => {
      try {
        const data = await imdbApi.getMovieCredits(movie_id, language);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(data, null, 2),
            },
          ],
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    }
  );
}

