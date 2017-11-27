import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent'

const data = {
    username: "edwin", password: "trollol"
}

class App extends Component {

    componentDidMount(){

        const postReq = ()=>{
            request
                .post('http://localhost:5000/add')
                .set('Content-Type', 'application/json')
                .send(data)
                .end(function(err, res){

                });
        }

        postReq();

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
