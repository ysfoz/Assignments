import React from 'react';
import {View,SafeAreaView,Text,StyleSheet} from 'react-native';

const App = () => {
    return(
        <SafeAreaView style={{flex:1,marginHorizontal:10,}}>

            <View style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                backgroundColor:'gray',
                borderWidth:20,
                borderColor:'crimson'
                }}>
                <View style={{
                    flex:1,
                    borderRadius:100,
                    height:100,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'orange',
                    marginHorizontal:40,
                    
                    
                }}>
                    <Text
                    style={{
                    fontSize:15,
                    fontWeight:'bold',
                    justifyContent:'center',
                    
                    }}>Orange Circle</Text>
                </View>


                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    marginRight:15
                    
                    
                }}
                >
                    <Text
                    style={{
                        backgroundColor:'yellow',
                        padding:13,
                        borderRadius:10,
                        fontWeight:'bold'
                    }}
                    >Yellow Box</Text>
                </View>
            </View>


            <View 
            style={{
                flex:2,
                backgroundColor:'pink',
                flexDirection:'row', 
                alignItems:'center',
                borderBottomWidth:2,
                }}>

                <View 
                style = {{
                    flex:3,
                    alignItems:"center",
                    justifyContent:'center',
                    height:350,
                    borderRadius:15,
                    backgroundColor:'black',
                    marginHorizontal:20,
                    

                }}>
                    <Text
                    style={{
                        fontSize:17,
                        fontWeight:'bold',
                        color:'white',
                        justifyContent:'center',

                    }}>Black Box</Text>
                </View>


                <View
                style = {{
                    flex:1,
                    backgroundColor:'brown',
                    height:370,
                    marginHorizontal:30,
                    borderRadius:50,
                    alignItems:'center',
                    justifyContent:'center'
            

                }}>
                    <Text
                    style={{
                        transform:[{rotate:'-90deg'}],
                        fontSize:17,
                        fontWeight:'bold',
                        color:'white',
                    }}>Brown Box</Text>
                </View>
            </View>

            




        </SafeAreaView>
    )
}

export default App;