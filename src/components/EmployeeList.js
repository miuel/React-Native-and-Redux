import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { HeaderStyleEmployees, Card } from './common';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';
import ListItem from './ListItem'

class EmployeeList extends Component {
    componentWillMount() {
            this.props.employeesFetch();

            this.createDataSource(this.props);
        }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }   
    
    createDataSource ({ employees }) {
         const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });

            this.dataSource = ds.cloneWithRows(employees);
    }


    renderRow(employee) {
            return <ListItem employee={employee} />
       }
    render() {
        return(
            <View style={{ backgroundColor: 'white' }} >
                    <HeaderStyleEmployees />
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                        style={{ paddingBottom: 10, marginBottom: 10, }} 
                    />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps , { employeesFetch })(EmployeeList);