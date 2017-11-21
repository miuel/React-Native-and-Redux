import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
        onRowPress() {
            Actions.employeeEdit({ employee: this.props.employee });
        }
    render () {
        const { name } = this.props.employee
        
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View style={styles.card}>
                    <Text style={styles.textStyle}>
                        {name}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    card: {
        position: 'relative',
        justifyContent: 'center',
        flexDirection: 'row',
        
        alignSelf: 'center',    
        marginTop: 15,        
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, 
    },
    textStyle: {
        alignSelf: 'center',
        color: '#333',
        fontSize: 16,
        fontFamily: 'Avenir',      
    }
}

export default ListItem;