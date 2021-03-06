import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Image, Text, View, ImageBackground } from 'react-native';
import {NextBtn} from './Components/NextBtn';
import {PlayBtn} from './Components/PlayBtn';
import {PlaylistBtn} from './Components/PlaylistBtn';
import {PrevBtn} from './Components/PrevBtn';

//Zo gebruik je externe style sheets
var styles = require('./styleSheets/number1');

//Deep Pruple ~ #7c00ff || Dark red ~ #700c0c ||  Royal pruple ~ 7851a9 || Lighter red ~ #b93737 ||

export default function App() {
  return (
    <>
      <View style={styles.mainContainer}>
      <LinearGradient colors={['#7851a9', '#b93737']} style={styles.mainContainer}>

        <View style={styles.ImageContainer}>
          <ImageBackground source={require('./assets/1.jpg')} style={styles.image}/>
        </View>

        <View style={styles.titelContainer}>
          <Text style={styles.titel}>
            Hier komt de muziek titel & artiest
          </Text>
        </View>

        <View style={styles.ctrlContainer}>
          <Text style={styles.slider}>Hier komt de slider</Text>

          {/* Count */}
          <View>
            <Text style={styles.beginCount}>0:00</Text>
            <Text style={styles.endCount}>3:56</Text>
          </View>

          {/*Controlls */}
          <View style={styles.ctrlIcons}>
            <PrevBtn givenColor={'#7851a9'}/>
          </View>
          <PlaylistBtn givenColor={'#7851a9'} />
        </View>
        </LinearGradient>
      </View>
    </>
  );
}
