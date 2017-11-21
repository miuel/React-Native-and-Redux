// import libs
import React from 'react';
import { Text, View } from 'react-native';




// make component
const Header = (props) => {
    const { viewStyle } = styles;
    return (
        <View style={viewStyle}>

        </View>
);
};

// creating styles
const styles = {
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',        
        marginBottom: 50,
    },
};

// si exporto  este componente con la sintaxis export (en index.js), debo 
// aqui exportarlo como un object
export { Header };
