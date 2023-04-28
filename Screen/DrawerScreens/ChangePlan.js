import * as React from 'react';
import { Text, View, Alert,StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';



function ChangePlan() {
  // Jsin Data
  const plans = [
    {id:1, plan: 399, validity:"84 days", talktime:"Unlimited", data:"1 GB/day"},
    {id:2, plan: 450, validity:"100 days", talktime:"Unlimited", data:"1 GB/day"} ,
    {id:3, plan: 500, validity:"84 days", talktime:"Unlimited", data:"1.5 GB/day"} ,
    
  ]

 const confirmplan = ()=>{
    Alert.alert(
      'Message',
      'Change request raised Successfully. Our operator Will be in touch shortly',
      [
        {
          text: 'OK',
          
        },
      ],
      {cancelable: false},
    );
  }

  const renderItem = ({item}) => {

    return (
      <View style={styles.row1}>
        <View style={styles.row}>
        <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>Plan</Text>
            </View>
            <View style={styles.end}>
              {/* <Image style={[styles.icon, {marginLeft:15, marginRight:5, width:14, height:14}]} source={{uri:"https://img.icons8.com/small/14/000000/double-tick.png"}}/> */}
              <Text style={styles.time}>{item.plan}</Text>
            </View>
            
          </View>
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>VALIDITY</Text>
            </View>
            <View style={styles.end}>
              {/* <Image style={[styles.icon, {marginLeft:15, marginRight:5, width:14, height:14}]} source={{uri:"https://img.icons8.com/small/14/000000/double-tick.png"}}/> */}
              <Text style={styles.time}>{item.validity}</Text>
            </View>
            
          </View>
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>TALKTIME</Text>
            </View>
            <View style={styles.end}>
              {/* <Image style={[styles.icon, {marginLeft:15, marginRight:5, width:14, height:14}]} source={{uri:"https://img.icons8.com/small/14/000000/double-tick.png"}}/> */}
              <Text style={styles.time}>{item.talktime}</Text>
            </View>
            
          </View>
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>DATA</Text>
            </View>
            <View style={styles.end}>
              {/* <Image style={[styles.icon, {marginLeft:15, marginRight:5, width:14, height:14}]} source={{uri:"https://img.icons8.com/small/14/000000/double-tick.png"}}/> */}
              <Text style={styles.time}>{item.data}</Text>
            </View>
            
          </View>
        </View>
        <TouchableOpacity 
        onPress={() => 
          // props.navigation.toggleDrawer();
          confirmplan()
        }
        style={styles.Button}>
                <Text style={styles.confirmplan}>confirm plan</Text>
                {/* <Text style={{fontSize:10,fontWeight:'600'}}>due onwed May 2023</Text> */}
               </TouchableOpacity>    
     </View>
    );
  }


  return (
    <View style={{ flex: 1,  }}>
      {/* Fetch Data */}
       <FlatList 
          // extraData={this.state}
          data={plans}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={renderItem}/>
    </View>
  );
}
export default ChangePlan;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width:'90%',
    // alignItems: 'center',
    // borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',

  },
  row1: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // borderColor: '#dcdcdc',
    // backgroundColor: '#fff',
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderBottomWidth: 1,


  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 270,
  },
  nameTxt: {
    // marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,

  },
  icon:{
    height: 28,
    width: 28, 
  },
  Button:{
    backgroundColor:'#307ecc',
    width:'25%',
    padding:5,
    borderRadius:5,
    margin:10
},
confirmplan:{
  fontSize:15,
  fontWeight:'600',
  color:'#fff'
}
});