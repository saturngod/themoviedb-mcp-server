# Movie Detail

## Step 1. Prepare the API

API call code need to update on `imdbApi.ts`

### Request

{movie_id} is movie id. Example 911430.

curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/{movie_id}?language=en-US' \
     --header 'Authorization: Bearer {token}' \
     --header 'accept: application/json'

### Response

```js
{
  "adult": false,
  "backdrop_path": "/lkDYN0whyE82mcM20rwtwjbniKF.jpg",
  "belongs_to_collection": null,
  "budget": 200000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "https://www.f1themovie.com",
  "id": 911430,
  "imdb_id": "tt16311594",
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_title": "F1",
  "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
  "popularity": 164.9484,
  "poster_path": "/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
  "production_companies": [
    {
      "id": 81,
      "logo_path": "/8wOfUhA7vwU2gbPjQy7Vv3EiF0o.png",
      "name": "Plan B Entertainment",
      "origin_country": "US"
    },
    {
      "id": 130,
      "logo_path": "/c9dVHPOL3cqCr2593Ahk0nEKTEM.png",
      "name": "Jerry Bruckheimer Films",
      "origin_country": "US"
    },
    {
      "id": 199632,
      "logo_path": null,
      "name": "Dawn Apollo Films",
      "origin_country": "US"
    },
    {
      "id": 194232,
      "logo_path": "/oE7H93u8sy5vvW5EH3fpCp68vvB.png",
      "name": "Apple Studios",
      "origin_country": "US"
    },
    {
      "id": 19647,
      "logo_path": null,
      "name": "Monolith Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2025-06-25",
  "revenue": 311694846,
  "runtime": 156,
  "spoken_languages": [
    {
      "english_name": "Danish",
      "iso_639_1": "da",
      "name": "Dansk"
    },
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "German",
      "iso_639_1": "de",
      "name": "Deutsch"
    },
    {
      "english_name": "Spanish",
      "iso_639_1": "es",
      "name": "Español"
    }
  ],
  "status": "Released",
  "tagline": "This is just the start.",
  "title": "F1",
  "video": false,
  "vote_average": 7.675,
  "vote_count": 676
}
```

## Step 2. Prepare MCP Function

Function name is `movie_detail`
description is `Show the movie detail information`
Parameters is

```
movie_id int
language string (default en-US)
```


Response will be API response. Write a code in `tools.ts`. 
Need to export the function for reusable in `app.js`.


## Step 3. Update on app.js

In app.js , import the movie detail function.

```ts
import { movie_detail } from './tools.js';
```

Also update on MCP server.

```ts
movie_detail(server);
```