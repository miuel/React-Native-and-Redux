import React, {Component} from 'react';

// importo solo lo que necesito hay mas tags y docs aqui :
// https://www.npmjs.com/package/react-native-art-svg
import Svg,{ Circle, Ellipse, Text} from 'react-native-svg';
           
const HeaderStyleCreateEmployee = () => {
    return(
            <Svg
                height="170"
                width="375"
            >
            <Ellipse
                cx="187"
                cy="10"
                rx="250"
                ry="100"  
                fill="#2c3e50"
            />
            
        </Svg>
        )
}

export {HeaderStyleCreateEmployee};