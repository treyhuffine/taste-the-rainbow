import React from 'react';

import SingleArch from './SingleArch'

let firstRainbow = {
  'position': 'absolute',
  'bottom': '10vh',
  'left': '20vw',
  'borderTopLeftRadius': '100vh',
  'borderTopRightRadius': '100vh',
  'width': '20vw',
  'height': '10vw',
  'backgroundColor': '#7fc6f4'
}
let secondRainbow = {
  'position': 'absolute',
  'bottom': '10vh',
  'left': '15vw',
  'borderTopLeftRadius': '100vh',
  'borderTopRightRadius': '100vh',
  'width': '30vw',
  'height': '15vw',
  'backgroundColor': 'red'
}

export default class FullRainbow extends React.Component {

  render() {
    let arches = this.props.rainbowColors.map( (props, idx) =>  {
      return <SingleArch rainbowSpecs={props} key={idx} index={idx} />
    })
    return (
      <div id="rainbow-wrapper">
        {arches}
      </div>
    )
  }
}
