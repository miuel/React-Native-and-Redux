import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ 
    label, 
    value, 
    onChangeText, 
    placeholder, 
    placeholderTextColor, 
    autoCapitalize, 
    secureTextEntry }) => { 
        const { 
            inputStyle, 
            labelStyle, 
            containerStyle } = styles;

    return(
        <View style={containerStyle}>            
            <TextInput
                    // autoCorrect sirve para que evitar el predictivo 
                    autoCorrect={false}
                    autoCapitalize={autoCapitalize}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    // para no mostrar el password
                    secureTextEntry={secureTextEntry}
            >
            </TextInput>
        </View>
    );
};

const styles = {
    inputStyle: {     
        fontSize: 16,
        lineHeight: 23,
        flex: 2, 
        /* backgroundColor: 'rgba(80,210,194,0.1)', */
        backgroundColor: '#ecf0f1',
        color: '#545454',
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 200
    }
    
}

export { Input };