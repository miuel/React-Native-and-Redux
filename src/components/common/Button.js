import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
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
        backgroundColor: '#00CAFA',
        justifyContent: 'center',
        flexDirection: 'row',
        
        alignSelf: 'center',    
        marginTop: 100,
        marginLeft: 20,
        
        width: 200,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#00CAFA',
        paddingTop: 5,
        paddingBottom: 5,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, 
    }
};


// si exporto  este componente con la sintaxis export (en index.js), debo 
// aqui exportarlo como un object
export { Button } ;
