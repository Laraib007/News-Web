import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
  render() {
    return (
      <div>
        
        <NewsItem dec={"Description"} title={"Title"}/>
      </div>
    )
  }
}

export default NewsComponent
