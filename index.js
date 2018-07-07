import { AppRegistry,Text,View } from 'react-native';
import React from 'react';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
const App = ()=>{

return (
    <View style={{flex:1}}>
 <Header title = {'Albums'}/>
 <AlbumList/>
</View>
);

};

AppRegistry.registerComponent('albums', () => App);
