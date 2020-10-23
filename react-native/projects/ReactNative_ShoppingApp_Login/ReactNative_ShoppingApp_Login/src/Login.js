import React from 'react';
import { SafeAreaView, 
    View,
    Text,
    Image ,
    StyleSheet, 
    Dimensions,
    tintColor, 
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import {Input,Button} from './component';  



const Login = () => {
    return (
        // keyboard acildiginda yazi yazilan kismin yukari kaydirilabilmesi icinalttaki kisim kalip
        //olarak eklenebilir. android ve ios ta default degerler farkli oldugu icin bazi component lari 
        // yazarken ternary olarak yazmak gerekir
      <SafeAreaView style={styles.container}> 
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS =='android' ? null:'padding'} > 
          <ScrollView style={{flex: 1}} bounces={false}> 
            <View style={{flex: 1}}>
              <Image
                source={require('./assets/cart.png')}
                style={styles.image}
              />
              <Input holder="Enter your E-mail" keyboard='email-address' />
              <Input holder="Enter your Password" />
              <View>

              <Image
                source={require('./assets/flower2.png')}
                style={styles.flower}
              />
              <Button text="Join Us" />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
} 

export default Login;

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#b2ebf2',
        justifyContent:'center',
        borderWidth:10,
        borderColor:'rgba(000,000,000,0.6)',
        borderRadius:Platform.OS == 'ios' ? 40 : null,
        
    },
    image:{
        
        resizeMode:'contain', // alttaki deger verilmeden calismadi
        width: Dimensions.get('window').width, // ekranin genisligine gore genislik verms olduk.
        height:Dimensions.get('window').height * 0.40, // ekranin boyunun %40 iin kapla
        tintColor:'#607d8b', // resmin rengi icin
    },
    flower:{
        flex:1,
        resizeMode:'contain',
        height:Dimensions.get('window').height *0.2,
        width:Dimensions.get('window').width,
        position:"relative"

        
    }
})

