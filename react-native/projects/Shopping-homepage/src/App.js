import React from 'react';
import {SafeAreaView,View,TextInput,StyleSheet,Image} from 'react-native';
import {UserEmail,UserPass,Button_item} from './components/Component'




const App =() =>{
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#80CBC4'}}>

      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>

        <Image 
        style = {styles.images}
        source = {require('../images/kindpng_1749302.png')}
        />
      </View>

      <View style={{alignItems:'center'}}>
      <UserEmail/>
      <UserPass/>

      </View>

      <View style={{flex:1}}>
        <Button_item name = 'Join Us'
                     warning = 'You muss first register'
        />
        <Button_item name = 'Register'
                     warning = 'OOPPS... Sorry, Try again later' 
                      />
      </View>

    </SafeAreaView>
  )

}

export default App;

const styles = StyleSheet.create({
  container:{

  },
  images:{
   width:160,
   height:140,
  }
})