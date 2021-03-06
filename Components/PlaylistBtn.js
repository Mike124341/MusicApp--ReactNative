import { Image, TouchableOpacity, View} from 'react-native';
import React, { useState } from "react";


export const PlaylistBtn = ({givenColor}) => {
    const [color, setColor] = useState('rgba(0, 0, 0, 0)');
    const onPress = () => {
        if (color === 'rgba(0, 0, 0, 0)') setColor(givenColor)
        if (color === givenColor) setColor('rgba(0, 0, 0, 0)')
    };

    return (
        <View style={{
            backgroundColor: color,
            width: '22%',
            height: '30%',
            alignSelf: 'flex-end',
            borderRadius:150,
            borderWidth: 2,
            borderColor: color,
            marginTop: '1%',
            }}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Image source={require('../assets/icons/Playlist.png')} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
        </View>
    )
}
