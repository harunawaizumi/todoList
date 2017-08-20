import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import SuperSelect from "./SuperSelectField";
import PropTypes from 'prop-types';



export default class DayDropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      day: props.days[0],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index, value) => this.setState({
      day: value});

  render () {
    return (

      <SuperSelect {...this.props} value={this.state.day} onChange={this.handleChange}>
        {Object.values(this.props.days).map((value) => (
          <MenuItem key={value} value={value} primaryText={value} />
        ))}
      </SuperSelect>
    )
  }
}

DayDropDown.defaultValues = {
  days: {}
}

DayDropDown.propTypes = {
  days: PropTypes.object
}
