import React from 'react';
import ReactNative,{View,Text,Image,Linking} from 'react-native';
import Card from './card';
import CardItem from './CardItem';
import Button from './Button'

const CardDetails = (props)=>{

const {headerStyle,headerView,imageStyle,imageView,mainImage} = style;
    return (
            <Card>
                <CardItem>
                    <View style={imageView}>
                        <Image style={imageStyle}  source={{uri:props.album.thumbnail_image}} />
                        </View>
                    <View style={headerView}>
                    <Text style={headerStyle}>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
                        </View>
               
                </CardItem>
                <CardItem>
                    <Image style={mainImage} source={{uri:props.album.image}}/>
                    </CardItem>
                    <Button onPress = { ()=>Linking.openURL(props.album.url)}/>
             </Card>
        
    )



};
const style = {
    headerStyle:{
        fontSize:20
    },
    headerView:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    imageStyle:{height:50,width:50},
    imageView:{
        justifyContent:'center',
        paddingRight:5,
        paddingLeft:5
    },
    mainImage:{
        flex:1,
        width:null,
        height:300
    }


}


export default CardDetails;