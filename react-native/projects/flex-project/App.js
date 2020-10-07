import React from 'react';
import {View,SafeAreaView,Text,Image,StyleSheet} from 'react-native';

const App = ()=>{
  return(
    <SafeAreaView style={{
      flex:1,
    }}>
      <View>
        <Text style = {{
        fontSize:40,
        fontWeight:"bold",
        marginLeft:18,
      }}>News</Text>
      </View>



      <View style = {styles.container}>
        
        <Image
        style={styles.images}
        source = {require('./images/first.jpeg')}
        />
        <Text style={styles.textbig}>Bulls Exit BitMEX Bitcoin Futures Market
        </Text>
        <Text style={styles.textsmall}>
          Since the announcement from U.S. regulators,BitMEX has witnessed an autflow of more than bitcoins,currently worth more than $422 million. 
        </Text>
      </View>



      <View style={styles.container}>
        <Image
        style={styles.images}
        source = {require('./images/second.jpeg')}
        />
        <Text style={styles.textbig}>Coinbase customers can now dodge a bank</Text>
        <Text style={styles.textsmall}>New update from Coinbase quickens the transmutation of crypto into fiat.Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.</Text>
      </View>



      <View style = {{flex:1,
      marginLeft:10,
      marginRight:10,
      marginTop:4,
      borderWidth:2,
      borderColor:'lightgray',
      borderRadius:5,
      padding:5,
      }}>

        <Image
         style={styles.images}
        source = {require('./images/third.jpeg')}
        />
       
      </View>


    </SafeAreaView>
  )
}

export default App;


const styles = StyleSheet.create({
  container:{
    flex:2,
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    borderWidth:2,
    borderColor:'lightgray',
    borderRadius:5,
    padding:5,
  },
  textbig:{
    fontSize:12,
    fontWeight:"bold"
      
  },
  textsmall:{
    fontSize:9,
  },
  images:{
      flex:1,
      width: null,
      justifyContent: 'center'
      
     

  },

});