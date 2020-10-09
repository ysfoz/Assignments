import React from 'react';
import {TextInput,StyleSheet, TouchableOpacity,Text} from 'react-native';

const UserEmail = ()=>{
    const [value, onChangeText] = React.useState('');
    return (
        <TextInput
        style = {Instyles.Input}
        onChangeText = {text => onChangeText(text)}
        value = {value}
        placeholder='Enter your E-mail'
        keyboardType='email-address'
        />
    )
    
}

const UserPass = ()=>{
    const [value, onChangeText] = React.useState('');
    return (
        <TextInput
        style = {Instyles.Input}
        onChangeText = {text => onChangeText(text)}
        value = {value}
        placeholder='Enter your Password'
        keyboardType='visible-password'
        />
    )
    
}

const Button_item = (props) => {
    return(
        <TouchableOpacity style={Instyles.button}
            onPress={()=> alert(props.warning)}
        >
            <Text style={Instyles.text}>{props.name}</Text>
        </TouchableOpacity>

    )

}

export {UserEmail, UserPass,Button_item};

const Instyles = StyleSheet.create({
    Input:{
        backgroundColor:"#ECEFF1",
        width:300,
        borderRadius:10,
        marginBottom:20,
        
    },
    button:{
        backgroundColor:'#536E7A',
        padding:15,
        alignItems:'center',
        marginLeft:100,
        marginRight:100,
        marginBottom:10,
        borderRadius:5,

    },
    text:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }
})