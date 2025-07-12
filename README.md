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

```js
{
    "themoviedb-mcp": {
        "url": "http://localhost:3000/mcp",
        "type": "sse"
    }
}
```

## Supported Function

- `popular_movie`
- `now_playing_movie`
- `movie_detail`
- `cast_list`
- `search_movie`


### 1. `popular_movie`
- **Parameters:**
  - `language` (optional, default: 'en-US')
  - `page` (optional, default: 1)

### 2. `now_playing_movie`
- **Parameters:**
  - None (no parameters required)

### 3. `movie_detail`
- **Parameters:**
  - `movie_id` (required)
  - `language` (optional, default: 'en-US')

### 4. `cast_list`
- **Parameters:**
  - `movie_id` (required)
  - `language` (optional, default: 'en-US')

### 5. `search_movie`
- **Parameters:**
  - `query` (required)
  - `page` (optional, default: 1)
  - `language` (optional, default: 'en-US')
  - `year` (optional)

