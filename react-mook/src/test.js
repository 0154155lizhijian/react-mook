import React, { Component } from 'react'

export default class Test extends Component {
constructor(props){
    super(props)
    this.state={

    }
}
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>测试组件</h2>
      </div>
    )
  }
}


