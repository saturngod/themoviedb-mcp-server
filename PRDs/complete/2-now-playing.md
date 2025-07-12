# Now Playing

## Step 1. Prepare the API

API call code need to update on `imdbApi.ts`

### Request

curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \
     --header 'Authorization: Bearer {token}' \
     --header 'accept: application/json'


### Response

```js
{
  "dates": {
    "maximum": "2025-07-16",
    "minimum": "2025-06-04"
  },
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
      "popularity": 612.5718,
      "poster_path": "/AEgggzRr1vZCLY86MAp93li43z.jpg",
      "release_date": "2025-05-08",
      "title": "Karate Kid: Legends",
      "video": false,
      "vote_average": 7.221,
      "vote_count": 310
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
      "popularity": 470.299,
      "poster_path": "/wqfu3bPLJaEWJVk3QOm0rKhxf1A.jpg",
      "release_date": "2025-07-01",
      "title": "The Old Guard 2",
      "video": false,
      "vote_average": 6.131,
      "vote_count": 405
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
      "popularity": 480.9303,
      "poster_path": "/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
      "release_date": "2025-06-04",
      "title": "Ballerina",
      "video": false,
      "vote_average": 7.439,
      "vote_count": 876
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
      "popularity": 444.7102,
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
      "popularity": 403.4917,
      "poster_path": "/lVgE5oLzf7ABmzyASEVcjYyHI41.jpg",
      "release_date": "2025-07-02",
      "title": "Heads of State",
      "video": false,
      "vote_average": 6.956,
      "vote_count": 360
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
      "popularity": 334.7735,
      "poster_path": "/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
      "release_date": "2025-07-01",
      "title": "Jurassic World Rebirth",
      "video": false,
      "vote_average": 6.441,
      "vote_count": 499
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
      "popularity": 352.4649,
      "poster_path": "/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
      "release_date": "2025-07-09",
      "title": "Superman",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 313
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
      "popularity": 231.5769,
      "poster_path": "/r3d6u2n7iPoWNsSWwlJJWrDblOH.jpg",
      "release_date": "2025-07-02",
      "title": "Dora and the Search for Sol Dorado",
      "video": false,
      "vote_average": 7,
      "vote_count": 38
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
      "popularity": 210.4407,
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
      "popularity": 200.8513,
      "poster_path": "/43c1efKzA1kigNzY0HBzeoXp8LR.jpg",
      "release_date": "2025-06-20",
      "title": "KPop Demon Hunters",
      "video": false,
      "vote_average": 8.626,
      "vote_count": 532
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
      "popularity": 233.4119,
      "poster_path": "/7ZRXha6VZEGP3C8Kab7pPwSMzDZ.jpg",
      "release_date": "2025-07-09",
      "title": "Ziam",
      "video": false,
      "vote_average": 6.885,
      "vote_count": 48
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
      "popularity": 178.5552,
      "poster_path": "/tObSf1VzzHt9xB0csanFtb3DRjf.jpg",
      "release_date": "2025-05-28",
      "title": "Bring Her Back",
      "video": false,
      "vote_average": 7.363,
      "vote_count": 223
    },
    {
      "adult": false,
      "backdrop_path": "/qtSY2SAL5QApuCUD0sXqyzgHYnl.jpg",
      "genre_ids": [
        28,
        35,
        80,
        9648
      ],
      "id": 1374534,
      "original_language": "nl",
      "original_title": "Bad Boa's",
      "overview": "When an overeager community officer and a reckless ex-detective are forced to team up, plenty of chaos ensues on the streets of Rotterdam.",
      "popularity": 191.1368,
      "poster_path": "/7bcndiaTgu1Kj5a6qyCmsWYdtI.jpg",
      "release_date": "2025-07-10",
      "title": "Almost Cops",
      "video": false,
      "vote_average": 6.385,
      "vote_count": 13
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
      "popularity": 169.4678,
      "poster_path": "/3lwlJL8aW6Wor9tKvME8VoMnBkn.jpg",
      "release_date": "2025-06-06",
      "title": "How to Train Your Dragon",
      "video": false,
      "vote_average": 7.902,
      "vote_count": 620
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
      "popularity": 164.9484,
      "poster_path": "/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
      "release_date": "2025-06-25",
      "title": "F1",
      "video": false,
      "vote_average": 7.673,
      "vote_count": 678
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
      "popularity": 137.9185,
      "poster_path": "/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg",
      "release_date": "2025-04-18",
      "title": "The Ritual",
      "video": false,
      "vote_average": 6.011,
      "vote_count": 89
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
      "popularity": 123.6918,
      "poster_path": "/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
      "release_date": "2025-04-16",
      "title": "Sinners",
      "video": false,
      "vote_average": 7.561,
      "vote_count": 1954
    },
    {
      "adult": false,
      "backdrop_path": "/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg",
      "genre_ids": [
        27,
        53,
        878
      ],
      "id": 1100988,
      "original_language": "en",
      "original_title": "28 Years Later",
      "overview": "Twenty-eight years since the rage virus escaped a biological weapons laboratory, now, still in a ruthlessly enforced quarantine, some have found ways to exist amidst the infected. One such group lives on a small island connected to the mainland by a single, heavily-defended causeway. When one member departs on a mission into the dark heart of the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors as well.",
      "popularity": 87.9643,
      "poster_path": "/wnHUip9oKvDJEJUEk62L4rFSYGa.jpg",
      "release_date": "2025-06-18",
      "title": "28 Years Later",
      "video": false,
      "vote_average": 7.196,
      "vote_count": 560
    },
    {
      "adult": false,
      "backdrop_path": "/fPWJn5pqBr8n4h0YxW3QuasdvoI.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1127110,
      "original_language": "en",
      "original_title": "Diablo",
      "overview": "Ex-con Kris Chaney seizes the daughter of a Colombian gangster to fulfill a noble promise to the young girl's mother. When her father enlists both the criminal underworld and a psychotic killer to exact his revenge, Kris relies on everything he's ever learned to stay alive and keep his word.",
      "popularity": 85.6694,
      "poster_path": "/uFQduVyYIinJy3eLjozgfl6Xtcn.jpg",
      "release_date": "2025-06-13",
      "title": "Diablo",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 87
    },
    {
      "adult": false,
      "backdrop_path": "/xScjwsqx8vXzBaKiioVIB5MkDmQ.jpg",
      "genre_ids": [
        10402,
        12,
        10749,
        35,
        10751
      ],
      "id": 1243341,
      "original_language": "en",
      "original_title": "Z-O-M-B-I-E-S 4: Dawn of the Vampires",
      "overview": "A new adventure dawns for Zed and Addison when their summer road trip takes an unexpected detour, landing them in the middle of yet another monster rivalry: Daywalkers vs. Vampires. Tensions flare when Zed and Addison find themselves acting as camp counselors between the two opposing supernatural factions. With the help of Eliza and Willa, they must convince sworn enemies Nova and Victor to try to unite their warring worlds before an even greater threat endangers them all.",
      "popularity": 81.6897,
      "poster_path": "/8H5NVRf4ylEczGdEHSuUWGAlICu.jpg",
      "release_date": "2025-07-10",
      "title": "Z-O-M-B-I-E-S 4: Dawn of the Vampires",
      "video": false,
      "vote_average": 7.056,
      "vote_count": 9
    }
  ],
  "total_pages": 238,
  "total_results": 4751
}
```


## Step 2. Prepare MCP Function

Function name is `now_playing_movie`
description is `What movies are currently available and playing in theaters?`
Parameters not required.

Response will be API response. Write a code in `tools.ts`. 
Need to export the function for reusable in `app.js`.


## Step 3. Update on app.js

In app.js , import the now playing function.

```ts
import { now_playing_movie } from './tools.js';
```

Also update on MCP server.

```ts
now_playing_movie(server);
```