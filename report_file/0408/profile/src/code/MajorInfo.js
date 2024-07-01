import React, { Component } from 'react';

export default class MajorInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      major: props.major,
      number: props.number,
    };
  }
  
  render() {
    const {major, number} = this.state;
    return (
      <div style={{ position: 'fixed', left: '23vw', top: '16vw', fontSize:"2vw"}}>
        <div>학과 : {major}</div>
        <div>학번 : {number}</div>
      </div>
    )
  }
}
