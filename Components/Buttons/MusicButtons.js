import { Image, TouchableOpacity, View} from 'react-native';
import React, { useState } from "react";

export const PlayBtn = ({givenColor}) => {
    const [color, setColor] = useState('rgba(0, 0, 0, 0)');
    const onPress = () => {
        if (color === 'rgba(0, 0, 0, 0)') setColor(givenColor)
        if (color === givenColor) setColor('rgba(0, 0, 0, 0)')
    };

    return (
        <View style={{
            width: '22%', height: '50%', alignSelf: 'center',
            borderRadius:150, borderWidth: 2, marginTop: 10,
            backgroundColor: color, borderColor: color,
            }}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Image source={require('/assets/icons/Play-Pause.png')} style={{}}/>
            </TouchableOpacity>
        </View>
    )
}

export const PlaylistBtn = ({givenColor}) => {
    const [color, setColor] = useState('rgba(0, 0, 0, 0)');
    const onPress = () => {
        if (color === 'rgba(0, 0, 0, 0)') setColor(givenColor)
        if (color === givenColor) setColor('rgba(0, 0, 0, 0)')
    };

    return (
        <View style={{ 
            width: '22%', height: '30%',
            alignSelf: 'flex-end', borderRadius:150, borderWidth: 2,
            marginTop: '1%', borderColor: color, backgroundColor: color,
            }}>

            <TouchableOpacity
                onPress={onPress}
            >
                <Image source={require('../assets/icons/Playlist.png')} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
        </View>
    )
}

export const PrevBtn = ({givenColor}) => {
    const [color, setColor] = useState('rgba(0, 0, 0, 0)');
    const onPress = () => {
        if (color === 'rgba(0, 0, 0, 0)') setColor(givenColor)
        if (color === givenColor) setColor('rgba(0, 0, 0, 0)')
    };

    return (
        <View style={{
            width: '22%', height: '50%', 
            alignSelf: 'center', borderRadius:150, borderWidth: 2,
            marginTop: 10, backgroundColor: color, borderColor: color,
            }}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Image source={require('../assets/icons/Previous.png')} style={{}}/>
            </TouchableOpacity>
        </View>
    )
}

export const NextBtn = ({givenColor}) => {
    const [color, setColor] = useState('rgba(0, 0, 0, 0)');
    const onPress = () => {
        if (color === 'rgba(0, 0, 0, 0)') setColor(givenColor)
        if (color === givenColor) setColor('rgba(0, 0, 0, 0)')
    };

    return (
        <View style={{
            width: '22%', height: '50%', 
            alignSelf: 'center', borderRadius:150, borderWidth: 2,
            marginTop: 10, backgroundColor: color, borderColor: color,
            }}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Image source={require('../assets/icons/Next.png')} style={{}}/>
            </TouchableOpacity>
        </View>
    )
}