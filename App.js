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
      isRunning:false,
      leftMode:1,// 1 is disable, 2 is Lap, 3 is reset,
      rightMode:1, // 1 is start , 2 is pause , 
    }
    this.leftButton = this.leftButton.bind(this);
    this.rightButton = this.rightButton.bind(this);
  }
  convertTime(times){
    const time = times;
    let min = parseInt(time / 60000);
    let s = parseInt((time %60000)/1000);//154000
    let ss = parseInt(((time%60000)%1000)/10);
    let str = '';
    if(min<10)
      str +=`0${min}:`;
    else
      str +=`${min}:`;
    if(s<10)
      str+=`0${s},`;
      else
      str+=`${s},`;
    if(ss<10)
    str+=`0${ss}`;
    else
    str+=`${ss}`;
    return str;

  }
add(){
console.log('add');
}
resetAll(){
  this.setState({leftMode:1,rightMode:1,isRunning:false})
}
leftButton(){
  switch(this.state.leftMode){
    case 2:
      this.add();
      break;
    case 3:
      this.resetAll();
      break;
  }
}
rightButton(){
  // if(this.state.rightMode === 1)
  // {
  //     this.setState((pre)=>{
  //       return {leftMode:2,rightMode:2,isRunning:true}
  //     })
    
  //     //this.setState({leftMode:2,rightMode:2,isRunning:true});
  // }
  // else
  // {


  //   this.setState({leftMode:3,rightMode:2,isRunning:false});
  // }
  this.setState({isRunning:!this.state.isRunning})
}
  render(){
    //console.log(this.state.isRunning);
    return(
      <View style = {styles.container}>
        
        <Provide isRunning = {this.state.isRunning}>
        {({count})=><Text style = {{fontSize:30,fontWeight:'bold'}}>{this.convertTime(count)}</Text>}
        </Provide>
        <View style = {styles.buttonContainer}>
        <TouchableHighlight style = {styles.leftButton1} onPress = {this.leftButton}>
          <Text>Vong</Text>
        </TouchableHighlight>

        <TouchableHighlight style = {styles.rightButton1} onPress = {this.rightButton}>
          <Text>Bat dau</Text>
        </TouchableHighlight>
        </View>
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
  },
  buttonContainer:{
    flexDirection:'row',
    width:'100%',
    //backgroundColor:'blue',
    justifyContent:'space-between',
    padding:20
  },
  leftButton1:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  }, 
  leftButton2:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'

  }, 
  rightButton1:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  },
  rightButton2  :{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  },


})