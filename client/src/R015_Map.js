import React, { Component } from 'react';

class R015_Map extends Component {

  componentDidMount() {
    let Map_Arr = [1, 3, 5, 7];
    let Map_newArr = Map_Arr.map( x => x)
    console.log("1. Map_newArr : ["+Map_newArr+"]");

    let Map_mulitiArr = Map_Arr.map(x=>x*2);
    console.log("2. Map_mulitiArr : [" +Map_mulitiArr+"]");
  }

  render() {
    return (
      <h2>[THIS IS Map]</h2>
    )
  }
}

export default R015_Map;