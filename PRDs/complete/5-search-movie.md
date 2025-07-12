# Search Movie

## Step 1. Prepare the API

API call code need to update on `imdbApi.ts`

### Request

{query} is movie id. Example batman. include_adult is always false. Shouldn't be parameter. language is parameter. default is en-US. page is parameter default is 1. year is parameter. default is empty. If year is empty, don't pass in the query string.

https://api.themoviedb.org/3/search/movie?query={query}&include_adult=false&language=en-US&page=1&year=2025

### Response

```js
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/AuUAB6bHEltolSvbBslfNSgsRIm.jpg",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 268,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld.",
      "popularity": 9.5479,
      "poster_path": "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
      "release_date": "1989-06-21",
      "title": "Batman",
      "video": false,
      "vote_average": 7.233,
      "vote_count": 8111
    },
    {
      "adult": false,
      "backdrop_path": "/nOWOU0bdX76iF9XA1YPlInLbI4Y.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 2661,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
      "popularity": 3.7273,
      "poster_path": "/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg",
      "release_date": "1966-07-30",
      "title": "Batman",
      "video": false,
      "vote_average": 6.417,
      "vote_count": 986
    },
    {
      "adult": false,
      "backdrop_path": "/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg",
      "genre_ids": [
        28,
        12,
        80,
        878,
        53,
        10752
      ],
      "id": 125249,
      "original_language": "en",
      "original_title": "Batman",
      "overview": "Japanese master spy Daka operates a covert espionage-sabotage organization located in Gotham City's now-deserted Little Tokyo, which turns American scientists into pliable zombies. The great crime-fighters Batman and Robin, with the help of their allies, are in pursuit.",
      "popularity": 1.5418,
      "poster_path": "/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg",
      "release_date": "1943-07-16",
      "title": "Batman",
      "video": false,
      "vote_average": 6.378,
      "vote_count": 115
    },
    {
      "adult": false,
      "backdrop_path": "/e807jDKiFcntZS32ze88X6I96OD.jpg",
      "genre_ids": [
        16,
        28
      ],
      "id": 1297763,
      "original_language": "ja",
      "original_title": "ニンジャバットマン対ヤクザリーグ",
      "overview": "The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!",
      "popularity": 21.9975,
      "poster_path": "/sVVT6GYFErVv0Lcc9NvqCu0iOxO.jpg",
      "release_date": "2025-03-17",
      "title": "Batman Ninja vs. Yakuza League",
      "video": false,
      "vote_average": 6.676,
      "vote_count": 183
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 1430994,
      "original_language": "fr",
      "original_title": "Mon ami Batman Tremblay",
      "overview": "",
      "popularity": 0.1385,
      "poster_path": "/oTsDdOE6barmJ82ksc3xVvaU7sh.jpg",
      "release_date": "2025-02-25",
      "title": "Mon ami Batman Tremblay",
      "video": false,
      "vote_average": 5,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/doiUtOHzcxXFl0GVQ2n8Ay6Pirx.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 209112,
      "original_language": "en",
      "original_title": "Batman v Superman: Dawn of Justice",
      "overview": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
      "popularity": 20.6622,
      "poster_path": "/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
      "release_date": "2016-03-23",
      "title": "Batman v Superman: Dawn of Justice",
      "video": false,
      "vote_average": 5.982,
      "vote_count": 18356
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18
      ],
      "id": 148918,
      "original_language": "ro",
      "original_title": "Superman, Spider-Man sau Batman",
      "overview": "Aron, a 5-year-old boy, sets together with his worried father on a journey at the end of which he wishes, like the superheroes in the comic books, to save his mother suffering from a heart condition.",
      "popularity": 0.1268,
      "poster_path": "/iUp85s5s7eaPbuCUNqOCeJCEVpY.jpg",
      "release_date": "2011-06-01",
      "title": "Superman, Spider-Man or Batman",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 23
    },
    {
      "adult": false,
      "backdrop_path": "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      "genre_ids": [
        80,
        9648,
        53
      ],
      "id": 414906,
      "original_language": "en",
      "original_title": "The Batman",
      "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      "popularity": 18.8432,
      "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      "release_date": "2022-03-01",
      "title": "The Batman",
      "video": false,
      "vote_average": 7.657,
      "vote_count": 11018
    },
    {
      "adult": false,
      "backdrop_path": "/silcq0dj3Scf1LtpBjjVKXMQXS2.jpg",
      "genre_ids": [
        16,
        28,
        878
      ],
      "id": 485942,
      "original_language": "ja",
      "original_title": "ニンジャバットマン",
      "overview": "Batman, along with many of his allies and adversaries, finds himself transported to feudal Japan by Gorilla Grodd's time displacement machine.",
      "popularity": 3.1038,
      "poster_path": "/5xSB0Npkc9Fd9kahKBsq9P4Cdzp.jpg",
      "release_date": "2018-06-15",
      "title": "Batman Ninja",
      "video": false,
      "vote_average": 5.85,
      "vote_count": 900
    },
    {
      "adult": false,
      "backdrop_path": "/ew5FcYiRhTYNJAkxoVPMNlCOdVn.jpg",
      "genre_ids": [
        28,
        80,
        18
      ],
      "id": 272,
      "original_language": "en",
      "original_title": "Batman Begins",
      "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
      "popularity": 12.2282,
      "poster_path": "/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg",
      "release_date": "2005-06-10",
      "title": "Batman Begins",
      "video": false,
      "vote_average": 7.714,
      "vote_count": 21574
    },
    {
      "adult": false,
      "backdrop_path": "/5WNjZa6vbWpfio4d9OcStuskwJs.jpg",
      "genre_ids": [
        16,
        28,
        12
      ],
      "id": 987400,
      "original_language": "es",
      "original_title": "Batman Azteca: Choque de imperios",
      "overview": "In the time of the Aztec Empire, Yohualli Coatl – a young Aztec boy  – experiences tragedy when his father and village leader, Toltecatzin, is murdered by Spanish Conquistadors. Yohualli escapes to Tenochtitlan to warn King Moctezuma and his high priest, Yoka, of imminent danger. Using the temple of Tzinacan, the bat god, as a lair, Yohualli trains with his mentor and assistant, Acatzin, developing equipment and weaponry to confront the Spaniard invasion, protect Moctezuma’s temple, and avenge his father’s death.",
      "popularity": 0.7157,
      "poster_path": "/o6DiaNL85FTDLua2EmFWnjDzq0d.jpg",
      "release_date": "2025-09-18",
      "title": "Aztec Batman: Clash of Empires",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35,
        28
      ],
      "id": 131185,
      "original_language": "tl",
      "original_title": "Alyas Batman En Robin",
      "overview": "Alyas Batman en Robin is a 1991 Filipino Batman comedy film produced by Regal Films spoofing the 1960s Batman television series. The movie was initially an unauthorized production, set to capitalize on the then in-production 1989 Batman film starring Michael Keaton. Warner Brothers threatened legal action and the release of the film was delayed until legal entanglements could be sorted out. The film was released in 1991, two years later than the intended 1989 release.",
      "popularity": 0.2859,
      "poster_path": "/m7ysdICz4AMvFTU8wYKz3i69n6P.jpg",
      "release_date": "1991-04-06",
      "title": "Alias Batman and Robin",
      "video": false,
      "vote_average": 5.1,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": "/7x4SNxO5HWArighxxFeet5sn3il.jpg",
      "genre_ids": [
        28,
        14
      ],
      "id": 364,
      "original_language": "en",
      "original_title": "Batman Returns",
      "overview": "Batman must face The Penguin, a sewer-dwelling gangleader intent on being accepted into Gotham society.  Meanwhile, another Gotham resident finds herself transformed into Catwoman and is out for revenge...",
      "popularity": 8.7138,
      "poster_path": "/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
      "release_date": "1992-06-19",
      "title": "Batman Returns",
      "video": false,
      "vote_average": 6.939,
      "vote_count": 6721
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 1338401,
      "original_language": "pt",
      "original_title": "As Aventuras com o Batman 2",
      "overview": "After the crisis caused by Matheus in the city, the toys start to worry more about their own safety. Additionally, Batman’s absence from the lives of the citizens increases the chances of Matheus carrying out his plan for revenge, which involves using two innocent toys as test subjects. These events could lead to serious consequences for both the community and the individuals involved.",
      "popularity": 0.0143,
      "poster_path": "/8I6Lr7junGoMjJKdF15i1S8UAyJ.jpg",
      "release_date": "2019-05-20",
      "title": "Adventures with Batman 2",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/z6cCtZmBd37p6XzTsDdO2TGwVhA.jpg",
      "genre_ids": [
        35,
        28,
        80,
        12
      ],
      "id": 1332473,
      "original_language": "en",
      "original_title": "Batman a Modrý Joker Mají Problém",
      "overview": "Batman finally catches The Joker and tries to interrogate him about the dissappearence of Herobrine, but Joker has become a blue lipstick liberal and now Batman has to discover his secrets, accompanied by his new companion - Robin / Terkel! The whole movie is improvized and has been made in less than a week",
      "popularity": 0.0387,
      "poster_path": "/tnUhWYdmMGkshSX2uqQ82Qm1ENW.jpg",
      "release_date": "2024-08-17",
      "title": "Batman and Blue Joker in Trouble",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/ccHxynNF7tTb6YyyUjl9tBvnLlH.jpg",
      "genre_ids": [
        35,
        10751
      ],
      "id": 1338370,
      "original_language": "pt",
      "original_title": "As Aventuras com o Batman",
      "overview": "A PARODY MOVIE. Batman holds a contest to decide who will be his new sidekick, but a completely mysterious person invades the contest and enslaves everyone in the city.",
      "popularity": 0,
      "poster_path": "/n0A0T0mFa3jNz6swGRv7a4pVPGL.jpg",
      "release_date": "2018-12-02",
      "title": "Adventures with Batman",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 1385669,
      "original_language": "pt",
      "original_title": "As Aventuras com o Batman 3: Em Busca de um Novo Lar",
      "overview": "A PARODY FILM. After the death of the giant man, Batman, Dave, and the toys are threatened with being sold, which would mean they could never be together again. In order to prevent this from happening, Batman decides to run away from home.",
      "popularity": 0,
      "poster_path": "/6Ijb11Up4XsR4hwHxVskDpX5Tm4.jpg",
      "release_date": "2019-12-13",
      "title": "Adventures with Batman 3: In Search of a New Home",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/n9RNcnj2M6ubZDmLFRXZdhlA0kg.jpg",
      "genre_ids": [
        27,
        28,
        18,
        53
      ],
      "id": 1459882,
      "original_language": "en",
      "original_title": "Cocaine Bear vs. Batman",
      "overview": "After hearing of the Brutal Murder spree Cocaine Bear went on, Batman has had enough and attempts to bring the Bear to justice, who will win?",
      "popularity": 0.1169,
      "poster_path": "/7JOso4boLVLVnRIqoYV5yHFxpoa.jpg",
      "release_date": "2025-04-05",
      "title": "Cocaine Bear vs. Batman",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/tVBsgjJ37KSuB4dUQAAqfc7h5Jf.jpg",
      "genre_ids": [
        99
      ],
      "id": 141559,
      "original_language": "en",
      "original_title": "Legends of the Dark Knight: The History of Batman",
      "overview": "A brief history of the DC Comics character Batman, created by Bob Kane in 1939.",
      "popularity": 0.2668,
      "poster_path": "/ijOIT8msWufRPp1OCVIPIaWgvwc.jpg",
      "release_date": "2005-11-15",
      "title": "Legends of the Dark Knight: The History of Batman",
      "video": false,
      "vote_average": 7,
      "vote_count": 14
    },
    {
      "adult": false,
      "backdrop_path": "/rpOqHZMNIaI4qP4r7nw1B7oA0mx.jpg",
      "genre_ids": [
        28,
        878,
        12
      ],
      "id": 415,
      "original_language": "en",
      "original_title": "Batman & Robin",
      "overview": "Batman and Robin deal with relationship issues while preventing Mr. Freeze and Poison Ivy from attacking Gotham City.",
      "popularity": 6.1334,
      "poster_path": "/i7hEUpDuMN2LOrCEifFyGSHZQSY.jpg",
      "release_date": "1997-06-20",
      "title": "Batman & Robin",
      "video": false,
      "vote_average": 4.37,
      "vote_count": 5144
    }
  ],
  "total_pages": 10,
  "total_results": 190
}
```

## Step 2. Prepare MCP Function

Function name is `search_movie`
description is `Search the movies`
Parameters is

```
query string
page int (default 1)
language string (default en-US)
year int (default empty)
```


Response will be API response. Write a code in `tools.ts`. 
Need to export the function for reusable in `app.js`.


## Step 3. Update on app.js

In app.js , import the movie detail function.

```ts
import { search_movie } from './tools.js';
```

Also update on MCP server.

```ts
search_movie(server);
```