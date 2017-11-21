import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, ButtonCreateEmployee, HeaderStyleCreateEmployee } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    render () {
        // console.log(this.props.employee);
        
        return(
            <View>
                <HeaderStyleCreateEmployee />
                <Card>
                        <EmployeeForm {...this.props} />
                        <ButtonCreateEmployee onPress={this.onButtonPress.bind(this)}>
                            Create
                        </ButtonCreateEmployee>
                    
                </Card>
            </View>            
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }; 
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);