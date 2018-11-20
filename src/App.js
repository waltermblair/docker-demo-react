import React, { Component } from 'react'
import './App.css'
import KibanaFrame from "./components/Kibana"
import NavInstance from "./components/Nav"
import Navbar from "react-bootstrap/es/Navbar";

// TODO - refactor DRY
const initialState = {
  changed: false,
  running: false,
  input1: true,
  input2: false,
  output: 'ready...',
  config1: 'up',
  config2: 'up',
  config3: 'up',
  config4: 'up',
  config5: 'up',
  config6: 'up',
  config7: 'up',
  config8: 'up',
  config9: 'up',
  config10: 'up',
  config11: 'up',
  config12: 'up',
  config13: 'up',
  config14: 'up',
  config15: 'up',
  config16: 'up',
  config17: 'up',
  config18: 'up'
};

class App extends Component {
  constructor () {
    super();
    this.state = initialState
    this.runDemo = this.runDemo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      changed: true})
  }

  handleInput(event) {
    let stringValue = event.target.value
    let boolValue = JSON.parse(stringValue)
    this.setState({
      [event.target.name]: boolValue,
      changed: true})
  }

  reset() {
    this.setState(initialState)
  }
  // TODO - configuration id's correspond to actual device component map not shown in this app
  runDemo () {
    this.setState({
      running: true,
      output: "running..."})
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
              "status": this.state.config1
            },
            {
              "id": 2,
              "status": this.state.config2
            },
            {
              "id": 3,
              "status": this.state.config3
            },
            {
              "id": 4,
              "status": this.state.config4
            },
            {
              "id": 5,
              "status": this.state.config5
            },
            {
              "id": 6,
              "status": this.state.config6
            },
            {
              "id": 7,
              "status": this.state.config7
            },
            {
              "id": 8,
              "status": this.state.config8
            },
            {
              "id": 9,
              "status": this.state.config9
            },
            {
              "id": 10,
              "status": this.state.config10
            },
            {
              "id": 11,
              "status": this.state.config11
            },
            {
              "id": 12,
              "status": this.state.config12
            },
            {
              "id": 13,
              "status": this.state.config13
            },
            {
              "id": 14,
              "status": this.state.config14
            },
            {
              "id": 15,
              "status": this.state.config15
            },
            {
              "id": 16,
              "status": this.state.config16
            },
            {
              "id": 17,
              "status": this.state.config17
            },
            {
              "id": 18,
              "status": this.state.config18
            }
          ],
          "input": [this.state.input1, this.state.input2]
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log('parsed json', json);
        this.setState({
          output: json.output.toString(),
          running: false});
        this.forceUpdate();
      })
      .catch(error => {
        console.log('parsing failed', error);
        this.setState({
          output: "error!",
          running: false});
        this.forceUpdate();
      })
  }

  // TODO - move table to component
  // TODO - replace diagram so numbers are consistent
  render () {
    return (
      <div>
        {/*<NavInstance />*/}
        <div className='left__container'>
          <p>Take control of your very own programmable logic device! There are eighteen logic gates, eight of which are fuses that you can turn on or off. Select your two inputs and see how various configurations affect the output. Logic gates are composed of dockerized Go apps connected by amqp-messaging "wires."</p>
            <img className="image" src={require('./device.png')} alt="logic device"/>
          <KibanaFrame />
        </div>
        <div className='right__container'>
          <form className="form">
            <table className="table">
              <tbody>
                <tr>
                  <th>Component</th>
                  <th>Configuration</th>
                </tr>
                <tr>
                  <td><label>7</label></td>
                  <td>
                    <select value={this.state.config7} name="config7" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>8</label></td>
                  <td>
                    <select value={this.state.config8} name="config8" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>9</label></td>
                  <td>
                    <select value={this.state.config9} name="config9" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>10</label></td>
                  <td>
                    <select value={this.state.config10} name="config10" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <tbody>
                <tr>
                  <th>Component</th>
                  <th>Configuration</th>
                </tr>
                <tr>
                  <td><label>11</label></td>
                  <td>
                    <select value={this.state.config11} name="config11" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>12</label></td>
                  <td>
                    <select value={this.state.config12} name="config12" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>13</label></td>
                  <td>
                    <select value={this.state.config13} name="config13" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>14</label></td>
                  <td>
                    <select value={this.state.config14} name="config14" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <form className="form">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                  <label>Input 1</label>
                  </td>
                  <td>
                  <select value={this.state.input1} name="input1" onChange={this.handleInput}>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Input 2</label>
                  </td>
                  <td>
                    <select value={this.state.input2} name="input2" onChange={this.handleInput}>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Output</label>
                  </td>
                  <td>
                    <label>{this.state.output}</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button className='button-run' onClick={this.runDemo} disabled={this.state.running}>
            Run Demo
          </button>
          {this.state.changed ? <button className='button-reset' onClick={this.reset}>
                                  Reset Configurations
                                </button> : null }
        </div>
      </div>
    )
  }
}
export default App