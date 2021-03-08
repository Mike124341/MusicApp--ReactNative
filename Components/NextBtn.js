import { Image, TouchableOpacity, View} from 'react-native';
import React, { useState } from "react";

export const NextBtn = ({givenColor}) => {

    const [color, setColor] = useState('rgba(0, 0, 0, 0)');
    const onPress = () => {
        if (color === 'rgba(0, 0, 0, 0)') setColor(givenColor)
        if (color === givenColor) setColor('rgba(0, 0, 0, 0)')
    };

    return (
        <View style={{
            width: '22%', marginTop: '1%',
            height: '30%', alignSelf: 'flex-end',
            borderRadius:150, borderWidth: 2,
            backgroundColor: color, borderColor: color,
            }}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Image source={require('./assets/icons/Next.png')} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
        </View>
    )
}
