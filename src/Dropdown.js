import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select value={this.props.currentValue} onChange={this.props.handleChanger} >
                {
                    this.props.options.map(dropdownItem => <option key={Number(Math.random())} value={dropdownItem}> {dropdownItem} </option>)
                }
            </select>
        )
    }
}

