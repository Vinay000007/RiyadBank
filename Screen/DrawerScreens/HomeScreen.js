import * as React from 'react';
import { Text, View, Button, Alert,StyleSheet,Image,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Main function
const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.mainView}>
            <View style={{width:"40%"}}>

               <Image style={styles.profile} source={require("../../Image/profile.png")}/>
               <View style={{margin:20}}>
                <Text>Plan</Text>
                <Text style={{fontSize:18}}>399</Text>
               </View>
               <TouchableOpacity style={styles.Button}>
                <Text style={{fontSize:15,fontWeight:'600',color:'#fff'}}>975.7 MB</Text>
                <Text style={{fontSize:10,fontWeight:'600',color:'#fff'}}>DATA REMAINING</Text>
               </TouchableOpacity>
            </View>
            <View><Text style={{width:3}}></Text></View>
            <View style={{width:'60%'}}>
            {/* <Image style={styles.profile} source={require("../../Image/profile.png")}/> */}
            <Text style={{fontSize:30,padding:10}}>7088654468</Text>
               <View style={{margin:20}}>
                <Text>VALID TILL</Text>
                <Text style={{fontSize:18}}>Apr 30 2023</Text>
               </View>
               <TouchableOpacity style={styles.Button}>
                <Text style={{fontSize:15,fontWeight:'600',color:'#fff'}}>BILL:595</Text>
                <Text style={{fontSize:10,fontWeight:'600', color:'#fff'}}>due onwed May 2023</Text>
               </TouchableOpacity>
            </View>
        </View>
    
    </View>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
container:{ 
    flex: 1,  
    alignItems: 'center' 
},
mainView:{
    padding:15,
    marginLeft:20,
    marginRight:20,
    flexDirection:'row',
},
profile:{
    width:62,
    height:62,
    borderRadius:50
},
Button:{
    backgroundColor:'#FF5F1F',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:5,
    margin:5
},

})