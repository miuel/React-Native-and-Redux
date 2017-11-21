import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => 
    (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        position: 'relative',
        padding: 5, 
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};


// si exporto  este componente con la sintaxis export (en index.js), debo 
// aqui exportarlo como un object
export { CardSection };
