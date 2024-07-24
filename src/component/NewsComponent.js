import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
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
