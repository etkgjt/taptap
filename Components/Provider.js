import React, { version } from 'react';
import {
Text,
View,

} from 'react-native';
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count :0,
            //isRunning : false
        }
        console.log(this.props.isRunning);
    }
    
    
        
    
render(){
    console.log(this.props.isRunning);  
    return (
        <Text> {this.props.children(this.state)} </Text>
    )
}

}