//#d35400
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonEditEmployee = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return ( 
        // aqui onPress llamo a la funcion onPress q esta 
        // declarada en LoginForm.js
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'Avenir',
        fontWeight:'700',        
    },
    buttonStyle: {
        position: 'relative',
        backgroundColor: '#d35400',
        justifyContent: 'center',
        flexDirection: 'row',
        
        alignSelf: 'center',    
        marginTop: 15,
        marginLeft: 20,
        
        width: 200,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#d35400',
        paddingTop: 5,
        paddingBottom: 5,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, 
    }
};


// si exporto  este componente con la sintaxis export (en index.js), debo 
// aqui exportarlo como un object
export { ButtonEditEmployee } ;