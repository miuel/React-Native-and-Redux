import React,  { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Comunications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, ButtonEditEmployee, HeaderStyleEditEmployee, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    };

    onTextPress() {
        const { name, phone, shift} = this.props;

        Comunications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;

        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false })
    }
    render () {

        return(
            <Card>
                <HeaderStyleEditEmployee />
                <EmployeeForm />
                    <ButtonEditEmployee onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </ButtonEditEmployee>                    

                <Card style={styles.buttonContainer}>
                     <ButtonEditEmployee 
                        onPress={this.onTextPress.bind(this)} 
                        style={styles.buttonContainer}
                    >
                        Text Schedule
                    </ButtonEditEmployee>          

                    <ButtonEditEmployee 
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                        style={styles.buttonContainer}
                    >
                        Delete Employee
                    </ButtonEditEmployee>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want Delete this ?
                    </Confirm>          
                </Card>
                    
            </Card>
        );
    }
};

const styles = {
    buttonContainer: {
        position: 'relative',
        flexDirection: 'row',
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);