import React from 'react';
import {Text,View} from 'react-native';



const Header = ({title})=>{
    const {bgColor,textStyle} = styles;
    return <View style={bgColor}><Text style={textStyle}>{title}</Text></View>
}

const styles = {
    textStyle :{
        fontSize:25,
        color:'white',
    },
    bgColor:{
backgroundColor:'#8A2BE2',
justifyContent:'center',
alignItems:'center',
height:70,
paddingTop:15,
shadowColor:'#000',
shadowOffset:{width:0,height:2},
shadowOpacity:0.2

    }
}
export default Header;