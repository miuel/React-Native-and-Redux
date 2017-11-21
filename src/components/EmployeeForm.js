import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render () {
        return (
            <View>
                <Text style={styles.marginText}>Name</Text>
                    <CardSection>                        
                        <Input
                            label="Name"
                            placeholder="Mike"
                            value={this.props.name}
                            onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
                        />
                    </CardSection>
                    <Text style={styles.marginText}>Phone</Text>
                    <CardSection>                        
                        <Input 
                            label="Phone"
                            placeholder="654 321 000"
                            value={this.props.phone}
                            onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
                        />
                    </CardSection>
                    <Text style={styles.marginText}>Selected Shift</Text>
                    <CardSection>                        
                        <Picker style={{ flex: 1 }}
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                            >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </CardSection>
            </View>
        )
    };
};

const styles = {
    marginText: {
        marginTop: 0,
        color: '#2c3e50',
        alignSelf: 'center',
    },
    textStyle: {
        color: '#2c3e50',
        alignSelf: 'center',
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
