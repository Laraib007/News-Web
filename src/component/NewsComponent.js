import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
  render() {
    return (
      <div>
        <div className='row'>
        <div className='col-md-3'>

        
        <NewsItem dec={"Description"} title={"Title"}/>
        <NewsItem dec={"Description"} title={"Title"}/>
        <NewsItem dec={"Description"} title={"Title"}/>
        <NewsItem dec={"Description"} title={"Title"}/>
        <NewsItem dec={"Description"} title={"Title"}/>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent
