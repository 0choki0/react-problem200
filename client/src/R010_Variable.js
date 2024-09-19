import React, { Component } from 'react';

class R010_Variable extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let letName = 'react';
    console.log('letName1 : ' +letName);
    letName = '200';
    console.log('letName2 : ' +letName);

    const constName = 'react';
    console.log('constName1 : ' +constName);
  }

  render() {
    return (
      <h2>[THIS IS Variable </h2>
    )
  }
}

export default R010_Variable;
