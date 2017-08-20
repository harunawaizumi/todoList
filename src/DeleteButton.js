/**
 * Created by haruna on 8/6/17.
 */
import React, { Component } from 'react'

export default class DeleteButton extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <button
        onClick={console.log('hello')}
      >&times;</button>
    )
  }
}