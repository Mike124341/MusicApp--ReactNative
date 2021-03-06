import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'black',
      minHeight: '100%'
    },
    ImageContainer: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      marginTop: '15%',
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      justifyContent: "center",
      borderRadius: 150,
      borderWidth: 1,
      overflow: 'hidden',
    },
  
    titelContainer: {
      backgroundColor: 'rgba(94, 64, 226, 1)',
      alignSelf: 'center',
      width: '80%',
      height: '5%',
      margin: '5%',
      justifyContent: 'center',
    },
    titel: {
      color: '#fff',
      alignSelf: 'center',
    },

    ctrlContainer: {
      backgroundColor: 'green',
      alignSelf: 'center',
      width: '90%',
      height: '30%',
    },
    slider: {
        alignSelf: 'center',
        color: '#fff',
        margin: '2%',
        backgroundColor: 'red',
        width: '100%',
        fontSize: 20,
    },

    beginCount: {
        color: '#fff',
        position: 'absolute',
        top: '20%',
        borderWidth: 1,
    },
    endCount: {
        color: '#fff',
        alignSelf: 'flex-end',
        position: 'absolute',
        top: '20%',
        borderWidth: 1,
    },
    ctrlIcons: {
      backgroundColor: 'blue',
      alignSelf: 'stretch',
      height: '45%',
      marginTop: '7%',
      flexDirection: 'row',
    }
});

module.exports = styles;