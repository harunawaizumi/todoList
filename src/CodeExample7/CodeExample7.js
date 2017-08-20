/**
 * Created by haruna on 8/1/17.
 */

import React, { Component } from 'react'
import { FloatingActionButton, RaisedButton } from 'material-ui'
import { ContentAdd } from 'material-ui/svg-icons/index'
import { DropDownMenu, MenuItem } from 'material-ui/DropDownMenu/index'
import DayTimeList from './DayTimeList'

const style = {
  marginRight: 20,
};

const styledDropDown = {
  width: 300
}




export default class AddNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdded = this.handleAdded.bind(this)
    this.removedItem= this.removedItem.bind(this)
  }

  handleChange = (event, index, value) => this.setState({value});


  handleAdded () {
    const newItem = {
      item: this.state.value
    };
    console.log(newItem)
    console.log('this.state.list', this.state.list)

    this.setState({
      list: [
        ...this.state.list,
        newItem
      ]
    })
  }

  removedItem = (removedItem) => {
    const list = this.state.list.filter(dt =>
      dt.item !== removedItem
    )
    this.setState({list})
  }


  render () {
    return (
      <div>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <DropDownMenu value={this.state.value} onChange={this.handleChange} style={styledDropDown}>
          <MenuItem value='Never' primaryText="Never" />
          <MenuItem value="Every Night" primaryText="Every Night" />
          <MenuItem value="Weeknights" primaryText="Weeknights" />
          <MenuItem value="Weekends" primaryText="Weekends" />
          <MenuItem value="Weekly" primaryText="Weekly" />
        </DropDownMenu>
        <RaisedButton label="Default" onClick={this.handleAdded}/>
        <DayTimeList
          list={this.state.list}
          removedItem={this.removedItem}
        />
      </div>
    )
  }
}