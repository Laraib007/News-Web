import React, { Component } from 'react'
import NewsItem from './NewsItem'




export class NewsComponent extends Component {
  articles =  [
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Janet Jackson on the teacher who hit her, motherhood, and her celebratory tour",
    "description": "Ahead of a UK tour, the pop star discusses her career, and the song her record label tried to stop.",
    "url": "https://www.bbc.co.uk/news/articles/cz9dgqd12zgo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ebfb/live/67963fc0-4986-11ef-aada-8989b38db4a8.jpg",
    "publishedAt": "2024-07-24T16:37:18.6886507Z",
    "content": "Janet Jackson can still remember the first song she wrote.\r\nShe was nine years old and bored, one rainy afternoon in 1975. \r\nHer older brothers already international megastars had just returned from … [+1094 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Yellowstone eruption blasts debris into sky near Old Faithful geyser",
    "description": "A hydrothermal explosion of rock and debris erupted near Old Faithful at Yellowstone National Park.",
    "url": "https://www.bbc.co.uk/news/articles/cz9x25gl4pno",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ad46/live/a9f42300-49cc-11ef-8916-49255163624f.jpg",
    "publishedAt": "2024-07-24T16:22:16.9390189Z",
    "content": "The survey said that a hydrothermal explosion is caused by water flashing to steam in a shallow hydrothermal system. \r\nSurrounding rocks are blown apart as the steam expands. The often violent events… [+509 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "US man given Irish citizenship says a DNA test 'changed his life'",
    "description": "Prof John Portmann thinks he is one of the first people to be granted Irish citizenship because of DNA only.",
    "url": "https://www.bbc.co.uk/news/articles/c0ve28453gpo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ad14/live/f8f88930-49c4-11ef-858e-5bb3848f9bc0.jpg",
    "publishedAt": "2024-07-24T15:52:18.7049085Z",
    "content": "As a baby, he was taken into the care of the Sisters of Mercy nuns in Phoenix. \r\nHe was then adopted and for most of his life, did not want to know more about his birth parents because he was worried… [+1121 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Kamala Harris, coconuts and brat - a new viral campaign",
    "description": "Young voters have embraced the online buzz around Kamala Harris, but will they show up in November?",
    "url": "https://www.bbc.co.uk/news/articles/cn3897kdmpeo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ac16/live/d1d155f0-493b-11ef-8f99-495d151231a1.jpg",
    "publishedAt": "2024-07-24T15:52:16.9397213Z",
    "content": "Republicans have long used video clips of Ms Harris' verbal slip-ups or awkward interviews against her. But in recent weeks, supporters have used those same clips to paint her as endearing, relatable… [+1992 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Michigan man, 80, run over for putting Trump sign in yard, say police",
    "description": "The 22-year-old suspect in the vehicle-ramming called police to confess before apparently taking his own life.",
    "url": "https://www.bbc.co.uk/news/articles/c1rw4xdjql4o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0cb5/live/06df7e60-4956-11ef-94ca-096ce5c0c136.jpg",
    "publishedAt": "2024-07-24T11:52:22.7362904Z",
    "content": "A Michigan man used an an all-terrain vehicle to run over and critically injure an 80-year-old man who was putting a Trump sign in his yard, in what police have described as a politically motivated a… [+2294 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "New footage shows US officer stood over Trump gunman's body",
    "description": "Bodycam video shows the immediate aftermath of the Trump shooting on the rooftop where the gunman was killed.",
    "url": "https://www.bbc.co.uk/news/articles/c2lk2jdewdvo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/60d6/live/fad95090-4997-11ef-94ca-096ce5c0c136.jpg",
    "publishedAt": "2024-07-24T10:07:18.0324829Z",
    "content": "Bodycam footage captured shortly after the attempted assassination of Donald Trump shows Secret Service and local law enforcement officers near the lifeless body of the gunman.\r\nA trail of blood can … [+522 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Australian surfer Kai McKenzie's leg washes up after shark attack",
    "description": "Kai ﻿McKenzie, 23, was attacked by a three-metre-long great white shark in Australia on Tuesday.",
    "url": "https://www.bbc.co.uk/news/articles/cprqxqz2deno",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f18a/live/19748350-498c-11ef-87bf-05d36ca5d8b6.jpg",
    "publishedAt": "2024-07-24T07:37:16.4859384Z",
    "content": "The severed leg of a surfer who was attacked by a shark has washed up on an Australian beach, with doctors now racing to see if it can be reattached.\r\nKai McKenzie, 23, was surfing near Port Macquari… [+1575 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "14 dead in Nepal after plane crashes during takeoff",
    "description": "An airline official told the BBC that the Saurya Airlines flight was headed to Pokhara, a popular tourism destination.",
    "url": "https://www.bbc.co.uk/news/articles/c978m8p6lm6o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e05f/live/50a30f00-498b-11ef-aada-8989b38db4a8.jpg",
    "publishedAt": "2024-07-24T07:22:14.5647726Z",
    "content": "Videos posted online showed the plane being enveloped in fire and smoke.\r\nFire engines and ambulances were rushed to the spot after the incident.\r\nNepali police spokesperson Dan Bahadur Karki confirm… [+442 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Kamala Harris slams Trump at first rally as he hits back",
    "description": "The Democratic White House candidate highlights her Republican opponent's criminal conviction, while he portrays her as \"radical left\".",
    "url": "https://www.bbc.co.uk/news/articles/cn053pnv0k1o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6595/live/12368700-4941-11ef-96a8-e710c6bfc866.jpg",
    "publishedAt": "2024-07-23T22:37:12.0953468Z",
    "content": "Taking the stage to applause at a high school in Milwaukee on Tuesday, Ms Harris highlighted her experience as California's attorney general.\r\n\"I took on perpetrators of all kinds, she said. Predator… [+2474 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Rescuers hail 'miracle' survival of hiker lost for two weeks",
    "description": "Scott Hern, 46, was found by rescuers in the remote canyons of the Red River Gorge in Kentucky.",
    "url": "https://www.bbc.co.uk/news/articles/c880mmjpvk4o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/57aa/live/90049d10-491f-11ef-a168-7982b5cfc27f.jpg",
    "publishedAt": "2024-07-23T20:52:22.2958768Z",
    "content": "Rescuers in Kentucky are marvelling at the \"miracle\" survival of a hiker who was missing for two weeks in a remote complex of canyons in the scenic Red River Gorge.\r\nScott Hern, 46, was located alive… [+1225 chars]"
    }
  ]

  constructor(){
    super()
    this.state ={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div>
        <h1>News Talks - All Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-3 my-3'>
             <NewsItem dec={element.description} title={element.title} imgUrl={element.urlToImage}/>
             </div>
          })}
       
        </div>
      </div>
    )
  }
}

export default NewsComponent
