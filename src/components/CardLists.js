/**
 * Created by haruna on 8/7/17.
 */
import React, { Component } from 'react'
import PersonalCard from '../containers/PersonalCard'
import PropTypes from 'prop-types'
import { loadItems } from '../actions/index'

const personalCardStyle = {
  margin: 50
}

export default class CardLists extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render () {
    if (this.props.isLoading) {
      return <div style={personalCardStyle}>Loading...</div>
    } else {
      return (
        <div style={personalCardStyle}>
          {this.props.items.map((item) =>
            <PersonalCard
              key={item.id}
              {...item}
              id={item.id}
              text={item.text}
              onDelete={this.props.onDelete}
            />
          )}
        </div>
      )
    }
  }
}

CardLists.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }))
}
