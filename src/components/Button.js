import React from 'react';
import ReactNative,{Button,Text} from 'react-native';




const but = (props)=>{


    return (<Button title="Buy Now"
    color="#8A2BE2" onPress={props.onPress} />)
}


export default but;
