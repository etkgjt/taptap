import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Provide from './Components/Provider';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isRunning:false
    }
  }
  render(){
    return(
      <View style = {styles.container}>
        <Provide isRunning = {this.state.isRunning}>
        {({count})=><Text style = {{fontSize:30,fontWeight:'bold'}}>{count}</Text>}
            </Provide> 
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  timeNumbers:{
    fontSize:30,
    color:'white',
  }
})