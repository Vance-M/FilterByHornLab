import './App.css';
import React, { Component } from 'react'
import Header from './header.js';
import ImageList from './ImageList';
import images from './data.js';


export default class App extends Component {
  state = {
    name: '',
    horns: '',
    keyword: ''
  }
  
  hornsChanger = (e) => {
    this.setState({horns: e.target.value});
}
keywordChanger = (e) => {
  this.setState({keyword: e.target.value});
}
  render() {
    console.log(this.state);
    const filteredBeasty = images.filter((image) => {
      if (!this.state.keyword) return true;

      if (image.keyword === this.state.keyword) return true;

      if (!Number(this.state.horns)) return true;

      if (image.horns === Number(this.state.horns)) return true;

      return false;
    })

    // const filteredBeasty = images.filter((image) => {
    //   if (!Number(this.state.horns)) return true;

    //   if (image.horns === Number(this.state.horns)) return true;

    //   return false;
    // })
    return (

      <div className='whole'>
          <Header />
          'hello'
              <div className='filter'>
                <form>
                    <input type='number' value={this.state.horns} onChange={this.hornsChanger}/>
                    
                    Type of Beasty:
                    <select value={this.state.keyword} onChange={this.keywordChanger}>
                        <option value=''>All</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='unicorn'>Unicorn</option>
                        <option value='unilego'>Unilego</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>Mouflon</option>
                        <option value='addax'>Addax</option>
                        <option value='chameleon'>Chameleon</option>
                        <option value='lizard'>Lizard</option>
                        <option value='dragon'>Dragon</option>
                    </select>
                    <button>Submit</button>
                </form>
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



