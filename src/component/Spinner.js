import React, { Component } from 'react'
import loader from './loader.gif'


export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loader} alt='loading'></img>
      </div>
    )
  }
}

export default Spinner