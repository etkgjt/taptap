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
            isRunning : this.props.isRunning
        }
    }
    componentDidMount(){
        if(this.state.isRunning)
        {
            this.id = setInterval(()=>this.setState({count:this.state.count+1}),1000)
        }
        else
            clearInterval(this.id);
    }
render = ()=><View>{this.props.children(this.state)}</View>
}