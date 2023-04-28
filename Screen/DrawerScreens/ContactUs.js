//React Native Picker
//https://aboutreact.com/react-native-picker/

//import React in our code
import React, {useState, createRef} from 'react';

//import all the components we are going to use
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert,TextInput} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [choosenLabel, setChoosenLabel] = useState('Native');
  const [choosenIndex, setChoosenIndex] = useState('2');
  const [userEmail, setUserEmail] = useState('');


  const passwordInputRef = createRef();
const handleSubmitPress =()=>{
    Alert.alert(
        'Message',
        'Issue submitted successfully',
        [
          
          {
            text: 'OK',
            
          },
        ],
        {cancelable: false},
      );
}
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Picker with multiple chose to choose*/}
        {/*selectedValue to set the preselected value if any*/}
        {/*onValueChange will help to handle the changes*/}
        <Text style={styles.text}>Select an issue</Text>
        <Picker style={{marginLeft:10,marginRight:10}}
          selectedValue={choosenLabel}
          onValueChange={(itemValue, itemIndex) => {
            setChoosenLabel(itemValue);
            setChoosenIndex(itemIndex);
          }}>
             {/*Text to show selected picker value*/}
            <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Feedback" value="Feedback" />
          <Picker.Item label="Internet Access" value="Internet Access" />
          <Picker.Item label="Value Added Server" value="Value Added Server" />
          <Picker.Item label="Port Number" value="Port Number" />
          <Picker.Item label="Roaming" value="Roaming" />
          <Picker.Item label="General" value="General" />
        </Picker>
        <View style={{marginLeft:20,marginRight:20, backgroundColor:'gray',width:'90%',height:1}}></View>
       
      
        <Text></Text>
        <Text style={styles.text}>Issue description</Text>
        <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                // placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#000"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
              </View>
               {/* <Button 
     onPress={() => {
        // props.navigation.toggleDrawer();
        Alert.alert(
          'Logout',
          'Are you sure? You want to logout?',
          [
            {
              text: 'Cancel',
              onPress: () => {
                return null;
              },
            },
            {
              text: 'Confirm',
              onPress: () => {
                AsyncStorage.clear();
                props.navigation.replace('LoginScreen');
              },
            },
          ],
          {cancelable: false},
        );
      }}
     title = "goto login" 
                  /> */}
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    flexDirection: 'column',
    padding:10
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    color:'#000'
    // alignSelf: 'center',
  },
  buttonStyle: {
    backgroundColor: '#107ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    width:'40%',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    // flex: 1,
    color: '#000',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    // borderRadius: 30,
    borderBottomColor: 'gray',
  },
});

export default App;
