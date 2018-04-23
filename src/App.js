import React, { Component } from 'react';
import Coursesales from './Coursesales'
import './App.css';

var courses = [
  { name: 'English language course', price: 199 },
  { name: 'Japanese Culture', price: 250 },
  { name: 'Earth and nature', price: 57 },
  { name: 'Meditation', price: 20 }
]

class App extends Component {
  render() {

    return (
      <div className="App">
        <h2>Welcome to Course purchase page</h2>
        <Coursesales items = {courses} />
      </div>
    );
  }
}

export default App;
