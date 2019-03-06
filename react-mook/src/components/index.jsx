import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add,del,addAsync} from '../redux/actions/index'

// const mapStatetoProps = (state) =>{
//   return{num:state}
// }
// const actionCreate = {add,del,addAsync}
@connect(state=>({num:state}),{add,del,addAsync})

class Index extends Component {
  render() {
    return (
      <div>
        <h1>有{this.props.num}个</h1>
        <button onClick={this.props.add}>add</button>
        <button onClick={this.props.del}>del</button>
        <button onClick={this.props.addAsync}>异步add拖延两秒</button>
      </div>
    )
  }
}

export default Index

