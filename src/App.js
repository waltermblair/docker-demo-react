import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor () {
        super();
        this.state = {
            output: 'ready...'
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        fetch('http://localhost:8080/run', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "header": 0,
                "body": {
                    "configuration": [
                        {
                            "id": 1,
                            "status": "up"
                        },
                        {
                            "id": 2,
                            "status": "down"
                        }
                    ],
                    "input": [true, false]
                }
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log('parsed json', json);
                this.setState({output: json.output.toString()});
                this.forceUpdate();
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
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