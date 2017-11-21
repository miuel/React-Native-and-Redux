import React, {Component} from 'react';

// importo solo lo que necesito hay mas tags y docs aqui :
// https://www.npmjs.com/package/react-native-art-svg
import Svg,{ Circle, Polyline, Text} from 'react-native-svg';
           
const HeaderStyleLogin = () => {
    return(
            <Svg
                height="200"
                width="400"
            >
            <Polyline            
                points="0 0, 0 120, 75 130, 150 140, 155 145, 165 155, 175 165, 195 165, 205 155, 215 145, 220 140, 295 130, 375 120, 375 0"
                fill="#00CAFA"
                stroke="none"
            />
            <Circle
                cx="187"
                cy="120"
                r="60"
                fill="#00CAFA"                    
            />
            <Circle
                cx="187"
                cy="120"
                r="50"
                fill="none"
                stroke="#fff"
                strokeWidth="2"                    
            />
            <Circle
                cx="187"
                cy="120"
                r="40"
                fill="#fff"    
                stroke="#ecf0f1"
                strokeWidth="2" 
            />
            <Text
                fill="#00CAFA"
                stroke="none"
                x="130"
                y="140"
                alignment="center"
                fontSize="20"  
                rotate="350"  
                fontFamily="Noteworthy" 
            >Manager</Text>
            
        </Svg>
        )
}

export {HeaderStyleLogin};