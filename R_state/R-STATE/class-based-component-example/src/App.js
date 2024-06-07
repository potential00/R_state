
// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Oritsematosan Whyte',
        bio: 'A software developer from Nigeria.',
        imgSrc: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901765.jpg',
        profession: 'Software Developer',
      },
      shows: false,
      mountedTime: null,
      timeElapsed: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    this.interval = setInterval(() => {
      if (this.state.mountedTime) {
        const timeElapsed = Math.floor((new Date() - this.state.mountedTime) / 1000);
        this.setState({ timeElapsed });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
