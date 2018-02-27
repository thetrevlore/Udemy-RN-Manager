import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}`);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            {`Text ${name}`}
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            {`Fire ${name}`}
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          {`Are you sure you want to fire ${name}?`}
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
