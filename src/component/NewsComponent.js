import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'




export class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "science"
  }
static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

  constructor(){
    super()
    this.state ={
      articles: [],
      loading: false,
      page:1
    }
  }
    async componentDidMount() {
      this.setState({loading: true})
      let data = await fetch(`https://newsapi.org/v2/top-headlines?q=${this.props.country}&apiKey=e98033f9dc4145e7a23f605a8fe60d1c&page=1&pageSize=${this.props.pageSize}`)
      
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
      })
    }

    clickNextHandler= async()=>{
      if(!( Math.ceil(this.state.page + 1>this.state.totalResults/20))){
        this.setState({loading: true})
      let data = await fetch(`https://newsapi.org/v2/top-headlines?q=${this.props.country}&apiKey=e98033f9dc4145e7a23f605a8fe60d1c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`)
      
      let parsedData = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles,
    loading: false
  })
}
    }

 clickPrevHandler= async()=>{
  this.setState({loading: true})
  let data = await fetch(`https://newsapi.org/v2/top-headlines?q=${this.props.country}&apiKey=e98033f9dc4145e7a23f605a8fe60d1c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`)
 
  let parsedData = await data.json()
this.setState({
page: this.state.page - 1,
articles: parsedData.articles,
loading: false
})
    }




  
  render() {
    return (
      <div>
        
        <h1 className='my-4'>News Talks - All Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-3 my-3'>
             <NewsItem dec={element.description?element.description.slice(0, 88)+"...":""} title={element.title?element.title.slice(0, 25)+"...":""} imgUrl={element.urlToImage} url={element.url}/>
             </div>
          })}
        </div>
        <div className='container d-flex justify-content-around'>
        <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.clickPrevHandler}>Pervious</button>
        <button disabled={this.state.page + 1>this.state.totalResults/this.props.pageSize} type="button" class="btn btn-dark " onClick={this.clickNextHandler}>Next</button>
        </div>
      </div>
    )
  }
}

export default NewsComponent
