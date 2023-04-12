import React, { Component } from "react";
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

import Calendar from './calendar';
import SearchBar from './search_bar';

class App extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: this.vantaRef.current,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return (
      <div className="App-container" ref={this.vantaRef}>
        < Calendar />
        < SearchBar />
      </div>
    );
  }
}

export default App;
