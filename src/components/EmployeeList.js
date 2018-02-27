import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderEmployee({ item }) {
    return <ListItem employee={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderEmployee}
        keyExtractor={(employee) => employee.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
