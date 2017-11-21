import React, {Component} from 'react';

// importo solo lo que necesito hay mas tags y docs aqui :
// https://www.npmjs.com/package/react-native-art-svg
import Svg,{ Circle, Ellipse, Text} from 'react-native-svg';
           
const HeaderStyleEditEmployee = () => {
    return(
            <Svg
                height="130"
                width="375"
            >
            <Ellipse
                cx="187"
                cy="10"
                rx="250"
                ry="100"  
                fill="#d35400"
            />
            
        </Svg>
        )
}

export {HeaderStyleEditEmployee};