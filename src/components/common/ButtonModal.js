import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonModal = ({ onPress, children }) => {
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
    color: '#00CAFA',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00CAFA',
    marginLeft: 5,
    marginRight: 5
  }
}; 

// si exporto  este componente con la sintaxis export (en index.js), debo 
// aqui exportarlo como un object
export { ButtonModal } ;
