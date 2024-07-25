import React, { Component } from 'react'
import NewsItem from './NewsItem'




export class NewsComponent extends Component {
  articles = [
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "CNBC",
"title": "Nasdaq drops 3% after Tesla and Alphabet earnings, heads for worst day since late 2022: Live updates - CNBC",
"description": null,
"url": "https://news.google.com/rss/articles/CBMid0FVX3lxTE5nWHNnQ2tieGdWUXotaUZsS1BnV2lNSmN3NDNOaHppTjkzbUJrOHdBU3dFcV9RUU9EZXhqM2JZdVRxYzQtQW16d1ZGd011Si1neUcwZGhKMFlvZERuTGQ2RC11MEppOU1YbXhLanNQV01raWc2d3NB0gF8QVVfeXFMTVlyZzVjMGUwZGktMHRKWGg4aHpGdW1RSjNyOEVjQWNvc2IyZDdGbXdCVW5WR0s0UGhPTmNOT3AwTHlYNjB0bkNhazVybzRjWTkwemNYNlkyd3lVWEhTdndsWTNGTkZmZ1o3VjNWd3hqTWk2ZHpRMzhBdzA1aQ?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T16:43:00Z",
"content": null
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "Reuters",
"title": "Israel carries out new raids in Gaza as Netanyahu visits US - Reuters",
"description": null,
"url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQX2xWQmlYNWFEMWhfYVdfc3FrVnRuRVd0d2IxVzdpN2sxS0YwZTRiWDd4UjhMbHpucENPVGF2dlV6YTJJT2U2cERUSmFCR1pjMHJGU2s5eDlYbVBjR0NaUWRzT3V0R3FyNHdka0gzU3AySEFIOVZJUVNzWGY0QTNlSEdKZU5ibUt0NlJzZ2UxZVEwVFpEblRMMDJRVWg4d0dOdGd3MU0xaE5CeDA?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T16:30:00Z",
"content": null
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "CNN",
"title": "What we know about the deputy charged with killing Sonya Massey in her home after she called 911 for help - CNN",
"description": null,
"url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPU04yYUZ0YzN2Z0dLTlVVdUtLVzE2Tjh3VHpSVkNuNDJZOEdOWmlHWFRwUy01dm9EcEhKOTd2Tk9OTHNXNDJBb184dWFnWHRkLWIzbGFWcTg3UUR0N1dlUkVsQ0pQSFAwWHlCTjFNdFY4ZGo2cVFIQklXcTVpcERWU2U0MG5oamEtTzdKMEJDX2tHbU1MeVBkd3ZKU1pGM1dNZnliNUJR0gGcAUFVX3lxTE95VUpVOUtpSlc3TDVzejJGN2MySmItUnhPeDNYb3BOZ0lJdG90MFQzblRlTXdjbVpqMEl5UWdEZUxnRVBVUmVQenJMYXlmQnZUb2Zwb0k2bEVIN1d6VC1YdEZxcENIREZfR3ZPRWhJV3NTNUl3V3BmRU9XQUtVaGptYTVnOWpUaWloS2tyUDNJaXIyd0hRT2g0S29BcA?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T16:26:00Z",
"content": null
},
{
"source": {
"id": "espn",
"name": "ESPN"
},
"author": null,
"title": "Brewers' Yelich 'not great,' to see back specialist - ESPN",
"description": "Brewers All-Star Christian Yelich was put on the IL and that he'll see a back specialist to determine \"the best for the near future and into the future.\"",
"url": "https://www.espn.com/mlb/story/_/id/40631527/brewers-put-christian-yelich-il-lower-back-inflammation",
"urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0724%2Fr1362443_1296x729_16%2D9.jpg",
"publishedAt": "2024-07-24T16:03:00Z",
"content": "Jul 24, 2024, 12:03 PM ET\r\nMilwaukee Brewers All-Star outfielder Christian Yelich is scheduled to see a specialist after he was placed on the 10-day injured list Wednesday with lower back inflammatio… [+1136 chars]"
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "KSAT San Antonio",
"title": "Trump rally gunman flew a drone 200 yards from the stage hours before the event, FBI chief testifies - KSAT San Antonio",
"description": null,
"url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPRm1VYWhUSV8tMHY5ZmlGelpvVWFvM19ZS0JsS0pEN2VWNDFrSG1xbkNHY2hOUTFtZkhVa08tTVJjNlFOQWN5cWZqVW4zS2RZNWdISDJXVFRheGdLcFdsTGI2eGVwX0J0dGFWMmhlWVZQN3dadjdtdUZyNDNaZGs3aTNiTFl6M3J6OWVOYU4wOHQ5NHRUU3ZZZzBPRnVnVDBBeVBVUUFabHE3Q2w4b2pvUzR4N1FId1ZacGNhcFU1ZUs0QnlSSGRGaWRVRGlZWlRpMkctYkRGTVBCMEFpdEE?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T15:56:43Z",
"content": null
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "The Washington Post",
"title": "Plane slips off runway and crashes at Kathmandu airport, killing 18 - The Washington Post",
"description": null,
"url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOWk1ibDJOazRmQ0lhaTRnVlRwclpJZTFlV1Z3aFdqOS1JakpWYU1WU1J4QnRuYi1NaHFUTWI2UFZYUERhbkZWbkN4N2lYREVnVE90NmVrZjAxYU50a1hQTTBYYVMxNU84RWdjN3dKQXFlbmwzbjdCWDBUdU1aaTVRUlg3QUpWeklHdGpubXJNU2RQemszQ2ZR?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T15:55:59Z",
"content": null
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "The Guardian",
"title": "John Mayall was a lightning rod for the blues who changed the course of British music - The Guardian",
"description": null,
"url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQQlA1YmI2MXZaVjJHQVh4UlVleWp0aTUtNzZzb1d5cjB6cm1VQTlaVGlTeXAtWDVLMkRCNHJNSEQxaWJJT19YOVlpSVFOQ1Bpd24wR2xYak9leDVINkVJc3BuV0lUTGlva1kyMjkyc3J3ckNjUTNEV0tqRVRfazY5eWxiNk5TNWpuVEpzZjdxSFpoSXJ4cVJJYk1NQlAxMlRGT2k0UG9yNllDUzk2WWI0dkh5X0JfOHRj0gG4AUFVX3lxTE02dnRyejJaY1gzc3M5dGdDODRCLXRnOVF4bEM0Rzd6SmV1SDI3N1l0eDd4cTVlZks5Wm1MVzNQcDJtUXhrNFoxbDZFVFlLOXBFaXRLT3F4ci05VTRRd2VsdFFPNUJMX1VsMGFMQWtLUzN0TzdfOXJWNVB5Nk5KaWRtR3V5RllHSzFoRHBsTUp1RGtITFJYOU1mTUdpc1JyUnlhQTFLRFo5RTV5UzRPVnkzNG9UQzZ3b24?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T15:48:00Z",
"content": null
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "The Associated Press",
"title": "Netanyahu seeks support for war in Gaza with speech to Congress but sparks protests and boycotts - The Associated Press",
"description": null,
"url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPMm1iYXkyRHFkY1B3ZmlUWHVSRFRfQmxsODU1bG9MNTN2bzJJc1N2Y08zSFFVcFRYT2xFQkktSmNJQ2FyYlN6cy1hV29iYmJaemtWTWlkQTFfRFlFZ0pwVHRoQzhDektlSnozcEVreTA1QWV6ZHRKVEpsdkd0VVpORjB5UElGTGI3Z0VrcERRdFFHa0dNVUNaSjZCMzg?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T15:46:00Z",
"content": null
},
{
"source": {
"id": "google-news",
"name": "Google News"
},
"author": "BBC.com",
"title": "Yellowstone eruption blasts debris into sky near Old Faithful geyser - BBC.com",
"description": null,
"url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE9Jdk81dUNNT0VhN2d4VXNaRU1tanllM2pHdEJzMVYzSFU2bnZ0MHpIV3dySHlhX00wd2NwcHo3V2J1a29ZV1dxMXhpcHdDTmRpdVB4QTJmSjRLQQ?oc=5",
"urlToImage": null,
"publishedAt": "2024-07-24T15:45:55Z",
"content": null
}
  ]

  constructor(){
  
    }
  }
  render() {
    return (
      <div>
        <h1>News Talks - All Top Headlines</h1>
        <div className='row'>
        <div className='col-md-3 my-3'>
        <NewsItem dec={"Description"} title={"Title"}/>
        </div>
        <div className='col-md-3 my-3'>
        <NewsItem dec={"Description"} title={"Title"}/>
        </div>
        <div className='col-md-3 my-3'>
        <NewsItem dec={"Description"} title={"Title"}/>
        </div>
        <div className='col-md-3 my-3'>
        <NewsItem dec={"Description"} title={"Title"}/>
        </div>
        <div className='col-md-3 my-3'>
        <NewsItem dec={"Description"} title={"Title"}/>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent
