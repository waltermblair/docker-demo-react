import React, { Component } from 'react'
import './App.css'
import KibanaFrame from "./components/Kibana"
import NavInstance from "./components/Nav"

const initialState = {
  changed: false,
  running: false,
  input1: 'true',
  input2: 'false',
  output: 'ready...',
  config1: 'up',
  config2: 'up',
  config3: 'up',
  config4: 'up',
  config5: 'up',
  config6: 'up',
  config7: 'up',
  config8: 'up'
};

class App extends Component {
  constructor () {
    super();
    this.state = initialState
    this.runDemo = this.runDemo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      changed: true})
  }

  reset() {
    this.setState(initialState)
  }

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
  render () {
    return (
      <div>
        <NavInstance />
        <div className='left__container'>
          <img className="image" src={require('./device.png')} alt="logic device"/>
          <KibanaFrame />
        </div>
        <div className='right__container'>
          <form className="form">
            <table className="table">
              <tr>
                <th>Component</th>
                <th>Configuration</th>
              </tr>
              <tbody>
                <tr>
                  <td><label>1</label></td>
                  <td>
                    <select value={this.state.config1} name="config1" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>2</label></td>
                  <td>
                    <select value={this.state.config2} name="config2" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>3</label></td>
                  <td>
                    <select value={this.state.config3} name="config3" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>4</label></td>
                  <td>
                    <select value={this.state.config4} name="config4" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <tr>
                <th>Component</th>
                <th>Configuration</th>
              </tr>
              <tbody>
                <tr>
                  <td><label>5</label></td>
                  <td>
                    <select value={this.state.config5} name="config5" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label>6</label></td>
                  <td>
                    <select value={this.state.config6} name="config6" onChange={this.handleChange}>
                      <option value="up">Up</option>
                      <option value="down">Down</option>
                    </select>
                  </td>
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
              </tbody>
            </table>
          </form>
          <form className="form" onSubmit={this.runDemo}>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                  <label>Input 1</label>
                  </td>
                  <td>
                  <select value={this.state.input1} name="input1" onChange={this.handleChange}>
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
                    <select value={this.state.input2} name="input2" onChange={this.handleChange}>
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