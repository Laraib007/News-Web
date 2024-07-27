import React, { Component } from 'react'
import NewsItem from './NewsItem'




export class NewsComponent extends Component {
  constructor(){
    super()
    this.state ={
      articles: [],
      loading: false,
      page:1
    }
  }
    async componentDidMount() {
      let data = await fetch('https://newsapi.org/v2/top-headlines?q=in&apiKey=e98033f9dc4145e7a23f605a8fe60d1c')
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles})
    }

    clickNextHandler= async()=>{
      let data = await fetch(`https://newsapi.org/v2/top-headlines?q=in&apiKey=e98033f9dc4145e7a23f605a8fe60d1c&page=${this.state.page + 1}`)
      let parsedData = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles
  })
    }

 clickPrevHandler= async()=>{
  let data = await fetch(`https://newsapi.org/v2/top-headlines?q=in&apiKey=e98033f9dc4145e7a23f605a8fe60d1c&page=${this.state.page - 1}`)
  let parsedData = await data.json()
this.setState({
page: this.state.page - 1,
articles: parsedData.articles
})
    }




  
  render() {
    return (
      <div>
        <h1>News Talks - All Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-3 my-3'>
             <NewsItem dec={element.description?element.description.slice(0, 88)+"...":""} title={element.title?element.title.slice(0, 25)+"...":""} imgUrl={element.urlToImage} url={element.url}/>
             </div>
          })}
        </div>
        <div className='container d-flex justify-content-around'>
        <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.clickPrevHandler}>Pervious</button>
        <button type="button" class="btn btn-dark " onClick={this.clickNextHandler}>Next</button>
        </div>
      </div>
    )
  }
}

export default NewsComponent
