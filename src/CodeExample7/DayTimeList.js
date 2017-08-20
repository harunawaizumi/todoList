/**
 * Created by haruna on 8/6/17.
 */

import React, {Component} from 'react'
import DayTimeItem from './DayTimeItem'
import PropTypes from 'prop-types';

export default class DayTimeList extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div>
        {this.props.list.map((item, id) => (
        <DayTimeItem {...item}
          key={id}
          id={id}
          item={item.item}
          removedItem={this.props.removedItem}
        />
      ))}
      </div>
    )
  }
}

DayTimeList.propTypes = {
  list: PropTypes.array
}

