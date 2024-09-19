import React, { Component } from 'react';

class R011_SpreadOperator extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let arr1 = ['num1', 'num2'];
    let arr2 = ['num3', 'num4'];
    let sumArr = [arr1+arr2];
    console.log(sumArr);

    sumArr = [...arr1, ...arr2];
    console.log(sumArr);

  }

  render() {
    return (
      <h2>[THIS IS SpreadOperator]</h2>
    )
  }
}

export default R011_SpreadOperator;