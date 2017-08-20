/**
 * Created by haruna on 8/6/17.
 */
import { ListItem } from 'material-ui'
import React, { Component } from 'react'

export default class DayTimeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickHandler = () => {
    this.props.removedItem(this.props.item)
  }

  render() {
    console.log('item', this.props.item)
    console.log('id', this.props.id)
    return (
      <ListItem
        primaryText={this.props.item}
        secondaryText={this.props.id}
        onClick={this.onClickHandler}
      />
    )
  }
}
