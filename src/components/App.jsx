import React, { Component } from "react";
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

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
        < CitySelect />
      </div>
    );
  }
}

export default App;
