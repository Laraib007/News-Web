import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {dec, title} = this.props
    return (
      <div className='container'>
        <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{dec}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
