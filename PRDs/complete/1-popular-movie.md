# Popular Movie

We are setup the IMDB API for popular movie. Update on the tools.ts.

Example function for `hello` is

```ts
export function helloTool(server: any) {
  server.tool(
    'hello',
    'Just return the message "Hello World {name}"',
    {
      name: z.string().describe('The name to greet'),
    },
    async ({ name }: { name: string }): Promise<CallToolResult> => {
      return {
        content: [
          {
            type: "text",
            text: `Hello World ${name}`
          }
        ]
      };
    }
  );
}
```

## Step 1. Prepare the API

### Request

curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' \
     --header 'Authorization: Bearer {token}' \
     --header 'accept: application/json'

### Response

```js
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/nKyBbFSooRPTJVqjrDteD1lF733.jpg",
      "genre_ids": [
        28,
        12,
        18
      ],
      "id": 1011477,
      "original_language": "en",
      "original_title": "Karate Kid: Legends",
      "overview": "After a family tragedy, kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City with his mother. When a new friend needs his help, Li enters a karate competition – but his skills alone aren't enough. Li's kung fu teacher Mr. Han enlists original Karate Kid Daniel LaRusso for help, and Li learns a new way to fight, merging their two styles into one for the ultimate martial arts showdown.",
      "popularity": 578.5995,
      "poster_path": "/AEgggzRr1vZCLY86MAp93li43z.jpg",
      "release_date": "2025-05-08",
      "title": "Karate Kid: Legends",
      "video": false,
      "vote_average": 7.183,
      "vote_count": 298
    },
    {
      "adult": false,
      "backdrop_path": "/x58Gk2ZGU5AEBp25MQe2nhZhd5z.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 846422,
      "original_language": "en",
      "original_title": "The Old Guard 2",
      "overview": "Andy and her team of immortal warriors fight with renewed purpose as they face a powerful new foe threatening their mission to protect humanity.",
      "popularity": 538.2859,
      "poster_path": "/wqfu3bPLJaEWJVk3QOm0rKhxf1A.jpg",
      "release_date": "2025-07-01",
      "title": "The Old Guard 2",
      "video": false,
      "vote_average": 6.146,
      "vote_count": 403
    },
    {
      "adult": false,
      "backdrop_path": "/sItIskd5xpiE64bBWYwZintkGf3.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 541671,
      "original_language": "en",
      "original_title": "Ballerina",
      "overview": "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma.",
      "popularity": 537.6592,
      "poster_path": "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
      "release_date": "2025-06-04",
      "title": "Ballerina",
      "video": false,
      "vote_average": 7.432,
      "vote_count": 872
    },
    {
      "adult": false,
      "backdrop_path": "/962KXsr09uK8wrmUg9TjzmE7c4e.jpg",
      "genre_ids": [
        28,
        53,
        18
      ],
      "id": 1119878,
      "original_language": "en",
      "original_title": "Ice Road: Vengeance",
      "overview": "Big rig ice road driver Mike McCann travels to Nepal to scatter his late brother’s ashes on Mt. Everest. While on a packed tour bus traversing the deadly 12,000 ft. terrain of the infamous Road to the Sky, McCann and his mountain guide encounter a group of mercenaries and must fight to save themselves, the busload of innocent travelers, and the local villagers’ homeland.",
      "popularity": 482.1715,
      "poster_path": "/2vHQBX5L4yoExTa55KmGIg2Q5s3.jpg",
      "release_date": "2025-06-27",
      "title": "Ice Road: Vengeance",
      "video": false,
      "vote_average": 6.972,
      "vote_count": 90
    },
    {
      "adult": false,
      "backdrop_path": "/xABhldZaMb6wfCH5oigV333OYnb.jpg",
      "genre_ids": [
        28,
        53,
        35
      ],
      "id": 749170,
      "original_language": "en",
      "original_title": "Heads of State",
      "overview": "The UK Prime Minister and US President have a public rivalry that risks their countries' alliance. But when they become targets of a powerful enemy, they're forced to rely on each other as they go on a wild, multinational run. Allied with Noel, a brilliant MI6 agent, they must find a way to thwart a conspiracy that threatens the free world.",
      "popularity": 453.8513,
      "poster_path": "/lVgE5oLzf7ABmzyASEVcjYyHI41.jpg",
      "release_date": "2025-07-02",
      "title": "Heads of State",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 354
    },
    {
      "adult": false,
      "backdrop_path": "/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 986056,
      "original_language": "en",
      "original_title": "Thunderbolts*",
      "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
      "popularity": 380.392,
      "poster_path": "/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
      "release_date": "2025-04-30",
      "title": "Thunderbolts*",
      "video": false,
      "vote_average": 7.435,
      "vote_count": 1711
    },
    {
      "adult": false,
      "backdrop_path": "/peAzdLKtT6VDWIfPQO9LJD1NCG4.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 1234821,
      "original_language": "en",
      "original_title": "Jurassic World Rebirth",
      "overview": "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
      "popularity": 362.1527,
      "poster_path": "/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
      "release_date": "2025-07-01",
      "title": "Jurassic World Rebirth",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 498
    },
    {
      "adult": false,
      "backdrop_path": "/g62G6aBcAcJv3ClCKmJgmHarHvq.jpg",
      "genre_ids": [
        878,
        12,
        28
      ],
      "id": 1061474,
      "original_language": "en",
      "original_title": "Superman",
      "overview": "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
      "popularity": 281.2289,
      "poster_path": "/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
      "release_date": "2025-07-09",
      "title": "Superman",
      "video": false,
      "vote_average": 7.33,
      "vote_count": 300
    },
    {
      "adult": false,
      "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
      "genre_ids": [
        27,
        9648
      ],
      "id": 574475,
      "original_language": "en",
      "original_title": "Final Destination Bloodlines",
      "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
      "popularity": 246.4376,
      "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
      "release_date": "2025-05-14",
      "title": "Final Destination Bloodlines",
      "video": false,
      "vote_average": 7.199,
      "vote_count": 1569
    },
    {
      "adult": false,
      "backdrop_path": "/9A0wQG38VdEu3DYh8HzXKXKhA6g.jpg",
      "genre_ids": [
        12,
        35,
        10751
      ],
      "id": 1287536,
      "original_language": "en",
      "original_title": "Dora and the Search for Sol Dorado",
      "overview": "Dora, Diego, and their new friends trek through the perilous dangers of the Amazonian jungle in search of the ancient and powerful treasure of Sol Dorado to keep it out of enemy hands.",
      "popularity": 238.5291,
      "poster_path": "/r3d6u2n7iPoWNsSWwlJJWrDblOH.jpg",
      "release_date": "2025-07-02",
      "title": "Dora and the Search for Sol Dorado",
      "video": false,
      "vote_average": 7,
      "vote_count": 36
    },
    {
      "adult": false,
      "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
      "genre_ids": [
        10751,
        878,
        35,
        12
      ],
      "id": 552524,
      "original_language": "en",
      "original_title": "Lilo & Stitch",
      "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
      "popularity": 216.4949,
      "poster_path": "/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg",
      "release_date": "2025-05-17",
      "title": "Lilo & Stitch",
      "video": false,
      "vote_average": 7.141,
      "vote_count": 818
    },
    {
      "adult": false,
      "backdrop_path": "/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg",
      "genre_ids": [
        16,
        14,
        28,
        35,
        10402
      ],
      "id": 803796,
      "original_language": "en",
      "original_title": "KPop Demon Hunters",
      "overview": "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
      "popularity": 211.7146,
      "poster_path": "/43c1efKzA1kigNzY0HBzeoXp8LR.jpg",
      "release_date": "2025-06-20",
      "title": "KPop Demon Hunters",
      "video": false,
      "vote_average": 8.634,
      "vote_count": 522
    },
    {
      "adult": false,
      "backdrop_path": "/tdMbbFhqyEqOK1QzNTvJjHWKbZX.jpg",
      "genre_ids": [
        27,
        53,
        28
      ],
      "id": 1429744,
      "original_language": "th",
      "original_title": "ปากกัด ตีนถีบ",
      "overview": "In a fight for survival against a horrifying army of zombies, a former Muay Thai fighter must use skill, speed and grit to save his girlfriend.",
      "popularity": 202.2932,
      "poster_path": "/7ZRXha6VZEGP3C8Kab7pPwSMzDZ.jpg",
      "release_date": "2025-07-09",
      "title": "Ziam",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 46
    },
    {
      "adult": false,
      "backdrop_path": "/5esDYWV0NoFwqPa1iC0g9akqZo9.jpg",
      "genre_ids": [
        27
      ],
      "id": 1151031,
      "original_language": "en",
      "original_title": "Bring Her Back",
      "overview": "Following the death of their father, a brother and sister are introduced to their new sibling by their foster mother, only to learn that she has a terrifying secret.",
      "popularity": 200.6905,
      "poster_path": "/tObSf1VzzHt9xB0csanFtb3DRjf.jpg",
      "release_date": "2025-05-28",
      "title": "Bring Her Back",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 222
    },
    {
      "adult": false,
      "backdrop_path": "/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg",
      "genre_ids": [
        14,
        10751,
        28
      ],
      "id": 1087192,
      "original_language": "en",
      "original_title": "How to Train Your Dragon",
      "overview": "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
      "popularity": 178.3946,
      "poster_path": "/3lwlJL8aW6Wor9tKvME8VoMnBkn.jpg",
      "release_date": "2025-06-06",
      "title": "How to Train Your Dragon",
      "video": false,
      "vote_average": 7.895,
      "vote_count": 617
    },
    {
      "adult": false,
      "backdrop_path": "/iHHWF01W2vNpjI8UzWh2F7tJEZp.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 1246369,
      "original_language": "ja",
      "original_title": "室町無頼",
      "overview": "Set in war-torn 15th century Kyoto, on the eve of the Onin War, the movie centers on a band of outlaws led by Hyoe (Oizumi) a scoundrel whose lethal sword skills place him at the tip of the spear in a deadly uprising against the corrupt Shogunate and its army, led by former friend-turned-archrival, Doken (Tsutsumi).",
      "popularity": 173.3735,
      "poster_path": "/6U0i0HsSCvhRW4IpGzdead6QRo3.jpg",
      "release_date": "2025-01-17",
      "title": "Muromachi Burai",
      "video": false,
      "vote_average": 9.1,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": "/lkDYN0whyE82mcM20rwtwjbniKF.jpg",
      "genre_ids": [
        28,
        18
      ],
      "id": 911430,
      "original_language": "en",
      "original_title": "F1",
      "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
      "popularity": 170.8496,
      "poster_path": "/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
      "release_date": "2025-06-25",
      "title": "F1",
      "video": false,
      "vote_average": 7.674,
      "vote_count": 674
    },
    {
      "adult": false,
      "backdrop_path": "/yAqL0makiGke5yYiVWpmBDSKIVP.jpg",
      "genre_ids": [
        27
      ],
      "id": 1278950,
      "original_language": "en",
      "original_title": "The Ritual",
      "overview": "Two priests, one in crisis with his faith and the other confronting a turbulent past, must overcome their differences to perform a risky exorcism.",
      "popularity": 153.4155,
      "poster_path": "/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg",
      "release_date": "2025-04-18",
      "title": "The Ritual",
      "video": false,
      "vote_average": 6,
      "vote_count": 88
    },
    {
      "adult": false,
      "backdrop_path": "/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
      "genre_ids": [
        27,
        28,
        53
      ],
      "id": 1233413,
      "original_language": "en",
      "original_title": "Sinners",
      "overview": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
      "popularity": 129.5474,
      "poster_path": "/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
      "release_date": "2025-04-16",
      "title": "Sinners",
      "video": false,
      "vote_average": 7.56,
      "vote_count": 1947
    },
    {
      "adult": false,
      "backdrop_path": "/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg",
      "genre_ids": [
        28,
        12,
        53,
        80
      ],
      "id": 7451,
      "original_language": "en",
      "original_title": "xXx",
      "overview": "Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government \"recruits\" him to go on a mission, he's not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.",
      "popularity": 122.0092,
      "poster_path": "/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
      "release_date": "2002-08-09",
      "title": "xXx",
      "video": false,
      "vote_average": 5.945,
      "vote_count": 4457
    }
  ],
  "total_pages": 51367,
  "total_results": 1027322
}
```

token need to read from .env file.

.env file

```
token=adsfj389adsfjk
```

## Step 2. Setup API

We should create the IMDB API class for all the api request. 

Base URL is `https://api.themoviedb.org/3`

popular movie is `/movie/popular?language=en-US&page=1`

Seprate the file `imdbApi.ts` and write the code in there.


## Step 3. Prepare MCP Function

Function name is `popular_movie`
description is `List of the popular movie`
Parameters are

```
language string (default en-US)
page int (default 1)
```

Response will be API response. Need to export the function for reusable in `app.js`.


## Step 4. Update on app.js

In app.js , import the popular movie.

```ts
import { popularTool } from './tools.js';
```

Also update on MCP server.

```ts
popularTool(server);
```