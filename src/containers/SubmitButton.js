/**
 * Created by haruna on 8/7/17.
 */
import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
import { addForm } from '../actions/index'
import { connect } from 'react-redux'

class SubmitButton extends Component {
  constructor (props) {
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler = () => {
    this.props.submitClick(this.props.value)
  }

  render () {
    return (
      <div>
        <RaisedButton label='Submit' onTouchTap={this.onClickHandler}/>
      </div>
    )
  }
}


export default SubmitButton
