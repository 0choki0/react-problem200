import React, { Component } from 'react';

class ClassPrototype extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    class ExamCountClass {
      constructor(num) {
        this.number = num
      }
      showNum() {
        console.log(`react_${this.number}`)
      }
    }

    let cnt = new ExamCountClass('200');
    cnt.showNum();
  }

  render() {
    return (
      <h2>[THIS IS Class]</h2>
    )
  }
}

export default ClassPrototype;