import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {dec, title, imgUrl, url} = this.props
    return (
      <div className='container'>
        <div className="card" style={{width: "18rem"}}>
  <img src={imgUrl?imgUrl:"https://i2.res.24o.it/stream/assets/img/20240724/AFXU2j2C//71f6213e-49da-11ef-9b94-2c89d7d2f36d-testoFgFotoAlt2.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{dec}</p>
    <a href={url} target='blank' className="btn btn-primary sm-3">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
