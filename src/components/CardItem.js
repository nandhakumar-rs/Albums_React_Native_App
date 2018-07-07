import React from 'react'
import ReactNative,{View} from 'react-native'




const CardItem = (props)=>{
    const {cardStyle} = style;
    return (

    <View style={cardStyle}> 

{props.children}
    </View>

    )

}

const style = {
    cardStyle:{
      borderBottomWidth:1,
      borderColor:'#000',
      padding:5,
      backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'flex-start'
    }
}

export default CardItem;