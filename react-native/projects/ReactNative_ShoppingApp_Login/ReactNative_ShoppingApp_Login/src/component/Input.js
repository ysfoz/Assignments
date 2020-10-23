import React from 'react';
import { TextInput, View,StyleSheet, Platform } from 'react-native';

const Input = ({holder,keyboard}) =>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder ={holder}
                keyboardType ={keyboard}
            />

        </View>
    )
}

export {Input}  // export u bu sekilde yaptik, ayni klasor icersinde yeni bir index,js 
//olusturduk ve ama js dosyamiza   import {Input,Button} from './component';  
// bu sekilde import ettik

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eceff1',
        padding:Platform.OS == 'ios' ? 15 : 5,
        margin:20,
        borderRadius:10,
    }
})