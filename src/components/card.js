import React from 'react'
import ReactNative,{View} from 'react-native'


const Card = (props)=>{
const {cardStyle} =  styles
return (
    <View style={cardStyle}>
{props.children}
    </View>
)



}
const styles ={
    cardStyle:{
        borderWidth:1,
        borderRadius:4,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        shadowRadius:4
    }
}

export default Card;