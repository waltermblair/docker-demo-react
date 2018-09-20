import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor () {
        super()
        this.state = {
            output: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        fetch('http://localhost:8080/ping')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
            console.log('parsed json', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
                <p>{this.state.output}</p>
            </div>
        )
    }
}
export default App