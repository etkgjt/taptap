import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
export default function(){

    return (
        <TouchableHighlight>
          <Text>{props.name}</Text>
        </TouchableHighlight>
    )
}