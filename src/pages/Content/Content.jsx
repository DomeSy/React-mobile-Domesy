import React, { Component } from 'react';
import { Accordion } from '@components/HighOrder';
import { connect } from 'react-redux';
import { Jump } from '@unilts';
import { List } from './component'

// import './index.less'
class Index extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount = () => {
    console.log(Jump.get())
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}
export default Index
