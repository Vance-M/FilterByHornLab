import './App.css';
import React, { Component } from 'react'
import Header from './header.js';
import ImageList from './ImageList';
import images from './data.js';


export default class App extends Component {
  render() {
    // const hornData = images.map(hornProps => <ImageList hornProps={hornProps} />)

    return (
      // { hornData },
      <div>
        'hello'
        <Header />
        <ImageList image = {images} />
      </div>
    )
  }
}



