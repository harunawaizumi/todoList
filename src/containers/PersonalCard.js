/**
 * Created by haruna on 8/7/17.
 */
import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardText, CardTitle, FlatButton, Toggle } from 'material-ui'
import PropTypes from 'prop-types'
import { deleteForm } from '../actions/index'


export default class PersonalCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleExpandChange = this.handleExpandChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleReduce = this.handleToggle.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleExpand = this.handleExpand.bind(this)

  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id)
  };

  render () {
    return (
      <div>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={this.props.text}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
            />
          </CardText>
          <CardTitle title={this.props.text} expandable={true} />
          <CardText expandable={true}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </p>
            <CardActions>
              <FlatButton label="Save" onClick={this.handleReduce} />
            </CardActions>
          </CardText>
          <CardActions>
            <FlatButton label="Edit" onClick={this.handleExpand} />
            <FlatButton label="Delete" onClick={this.handleDelete} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

PersonalCard.propTypes = {
  text: PropTypes.string.isRequired
}