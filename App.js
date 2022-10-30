import React,{useState}from 'react';
import {StyleSheet, View, Text, Button, FlatList,SafeAreaView} from 'react-native';

import { getAllContacts, addContact, deleteAllContact} from './realm'

function App(){
  const [contacts, setContacts] = useState(getAllContacts);
  const [counter, setCounter] = useState(contacts.length + 1);
  const renderItem = ({item}) =>(
    <View style={styles.itemViewStyle}>
      <Text>{item.recordID}</Text>
      <Text>{item.givenName}</Text>
      <Text>{item.familyName}</Text>
      <Text>{item.phoneNumber}</Text>
      <Button title='Delete'
         onPress={() => {
           deleteAllContact();
           setContacts(getAllContacts);
           setCounter(1);
         }}/>
    </View>
  )
  return(
   <SafeAreaView style={{padding: 3}}>
     <View style={styles.button}>
       <Button title='Add Books' 
         onPress={() =>{
         addContact(counter,'*Rich Dad Poor Dad','-Robert Keoskie', '-The central theme of Rich Dad Poor Dad is how to use money as a tool for wealth development', );
         setContacts(getAllContacts);
         setCounter(counter + 1);
       }}/>
     </View>
     
     
     <View>
       <Text style={styles.textHeader}>Books</Text>
       <FlatList 
       data = {contacts}
       keyExtractor={item => item.recordID}
       renderItem={renderItem}/>
     </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  button: {
    margin: 20,
    width: 250
  },
  textHeader:{
    marginTop: 10,
    fontSize: 25,
    fontWeight:'bold'
  },
  itemViewStyle:{
    
    justifyContent:'space-between'
  }
});
export default App;