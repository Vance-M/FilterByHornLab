import React, { Component } from 'react'

class ImageItem extends Component {
    render() {
        return (
            <li className='beasty' key={this.props.beastProps.horns}>
                <p><img src={this.props.beastProps.url} alt = {this.props.beastProps.description} className= 'beasty-image'/></p>
                <p>{this.props.beastProps.title}</p>
                <p>{this.props.beastProps.description}</p>
            </li>
        )
    }
}

export default class ImageList extends Component {
    render() {
        const beastProps = this.props.images.map(beastProps => <ImageItem beastProps={beastProps} key={beastProps.description} />)
        return (
            <ul className='list-of-beasts'>
                { beastProps }
            </ul> 
        )
    }
}




