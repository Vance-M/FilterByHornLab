import React, { Component } from 'react'

// class headerkeywords extends Component {
//     render() {
//         const test = this.props.beastProps.keyword
//         return (
//             test
//         )
//     }
// }

export default class header extends Component {
    state = {
        name: '',
        horns: '',
        keyword: ''
      }
      
    render() {
        // const beastProps = this.props.image.map(beastProps => <headerkeywords beastProps={beastProps} key={beastProps.description} />)
        return (
            <div>
                <form>
                    {/* <input value={this.state.name}/> */}
                    Type of Beasty:
                    <select value={this.state.keyword} onChange={(e) => {this.setState({keyword: e.target.value})}}>
                        {/* <option keyword= {<headerkeywords/>} >{beastProps.keyword}</option> */}
                        <option keyword=''>All</option>
                        <option keyword='narwhal'>Narwhal</option>
                        <option keyword='rhino'>Rhino</option>
                        <option keyword='unicorn'>Unicorn</option>
                        <option keyword='unilego'>Unilego</option>
                        <option keyword='triceratops'>Triceratops</option>
                        <option keyword='markhor'>Markhor</option>
                        <option keyword='mouflon'>Mouflon</option>
                        <option keyword='addax'>Addax</option>
                        <option keyword='chameleon'>Chameleon</option>
                        <option keyword='lizard'>Lizard</option>
                        <option keyword='dragon'>Dragon</option>
                    </select>
                    <button>Submit</button>
                </form>
                <div>
                    Type: {this.state.keyword}
                </div>
            </div>
        )
    }
}
