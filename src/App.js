import './App.css';
import React, { Component } from 'react'
import Header from './header.js';
import ImageList from './ImageList';
import images from './data.js';
import Dropdown from './Dropdown.js';


export default class App extends Component {
  state = {
    horns: '',
    keyword: ''
  }
  
  hornsChanger = (e) => {
    this.setState({horns: Number(e.target.value)});
  }
  keywordChanger = (e) => {
  this.setState({keyword: e.target.value});
  }

  render() {

    const filteredBeasty = images.filter((image) => {
      if (!this.state.keyword && !this.state.horns) return true;
      if (this.state.keyword && !this.state.horns)
      { if (image.keyword === this.state.keyword) return true;}
      if(!this.state.keyword && this.state.horns)
      { if (image.horns === this.state.horns) return true;}
      if(this.state.keyword && this.state.horns)
      { if (image.horns === this.state.horns && image.keyword === this.state.keyword) return true;}      
      return false;
    })

    return (
      <div className='whole'>
          <Header />
          'hello'
          <div className='filter'>
                Horn Number
                <Dropdown currentValue={this.state.horns} handleChanger= {this.hornsChanger} options={['', 1, 2, 3, 100]}   />
          </div>
          <div className='filter'>
                Beasty Type
                <Dropdown currentValue={this.state.keyword} handleChanger= {this.keywordChanger} options={['', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}  />
          </div>
          <div>
            <p>Horns: {this.state.horns}</p>
            Type: {this.state.keyword}
          </div>
          <ImageList images = {filteredBeasty} />
      </div>
    )
  }  
}
