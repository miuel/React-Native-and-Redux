import React from 'react';
import { View } from 'react-native';

const Card = (props) => 
    (
        // me traigo las propiedas q tiene el hijo (AlbumDetail)
        <View style={styles.containerStyle}>            
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        backgroundColor: "#fff",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
    }
};


// si exporto  este componente con la sintaxis export (en index.js), debo 
// aqui exportarlo como un object
export { Card };
