import React, { Component } from 'react'
import './App.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Iframe from 'react-iframe'

function handleSelect(selectedKey) {
}

function NavInstance() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          Docker Demo
        </Navbar.Brand>
      </Navbar.Header>
      {/*<Nav activeKey={1} onSelect={handleSelect}>*/}
        {/*<NavItem eventKey={1}>*/}
          {/*Home*/}
        {/*</NavItem>*/}
        {/*<NavItem eventKey={2} href="http://localhost:5601">*/}
          {/*Kibana*/}
        {/*</NavItem>*/}
      {/*</Nav>*/}
    </Navbar>
  )
}

function KibanaFrame() {
  return (
    <Iframe url="http://localhost:5601/app/kibana#/dashboard/fe385fb0-e7be-11e8-8ff8-014064b9a4f6?embed=true&_g=()"
            width="100%"
            height="600px"
            position="relative"
Iframe      styles={{padding: "10px"}}
            allowFullScreen="true"/>
  )
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      output: 'ready...'
    };
    this.runDemo = this.runDemo.bind(this)
  }

  runDemo () {
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
      <div>
        <NavInstance />
        <div className='image__container'>
          <img className="image" src={require('./device.png')} alt="logic device"/>
          <KibanaFrame />
        </div>
        <div className='button__container'>
          <button className='button' onClick={this.runDemo}>
            Click Me
          </button>
          <p>{this.state.output}</p>
        </div>
      </div>
    )
  }
}
export default App