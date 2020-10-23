import React from 'react';
import {TouchableOpacity, View,Text,StyleSheet, Dimensions, Platform } from 'react-native';


const Button =({text})=> {
    return(
        <TouchableOpacity style={styles.join}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export {Button}

const styles = StyleSheet.create({
    join:{
        backgroundColor:'#607d8b',
        alignItems:'center',
        padding:Platform.OS == 'android' ? 5 : 10,
        width :Dimensions.get('window').width * 0.5,
        height:Dimensions.get('window').height * 0.045,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:25,
        position:'absolute',
        top:Platform.OS == "ios" ? 47 : 29,
        left:Platform.OS == 'ios' ? 100: 90,
    },
    text:{
        color:'#4dd0e1',
        fontWeight:'bold',
        fontSize:16,

        
    }
})
