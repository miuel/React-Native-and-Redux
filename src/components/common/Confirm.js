import React, { Componet } from 'react';
import { Text, View, Modal } from 'react-native';
import { ButtonModal } from './ButtonModal';
import { CardModal } from './CardModal';

const Confirm = ({ children, onAccept, onDecline, visible })  => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent 
            animationType="slide"
            onRequestClose={() => {}}

        >
            <View style={containerStyle}>
                <CardModal style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>   
                </CardModal>
                <CardModal>
                    <ButtonModal onPress={onAccept}>Yes</ButtonModal>
                    <ButtonModal onPress={onDecline}>No</ButtonModal>
                </CardModal> 
                            
            </View>
        </Modal>
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 40,
    }, 
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1, 
        justifyContent: 'center'
    }
}

export { Confirm };


