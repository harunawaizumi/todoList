/**
 * Created by haruna on 8/7/17.
 */
import React, { Component } from 'react'
import { TextField } from 'material-ui'
import SubmitButton from './SubmitButton'
import { addFormRequest } from '../actions/index'
import { bindActionCreators, getState } from 'redux'
import { connect } from 'react-redux'


class NewCardAdder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitClick = () => {
      this.props.dispatch(addFormRequest(this.state.value))
    }
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }


  render () {
    return (
      <form>
        <TextField
          hintText="Name"
          value={this.state.value}
          onChange={this.handleChange}
        /><br />
        <SubmitButton
          submitClick={this.submitClick}
          value={this.state.value}
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch, state) => ({
  dispatch
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardAdder)
