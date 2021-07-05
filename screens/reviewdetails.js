import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {globalStyles,images} from '../styles/global.js'
import Card from '../shared/card.js';
export default function ReviewDetails({ route, navigation}) {

    const { item } = route.params;
    const rating = item['rating']
    return (
        <View style={globalStyles.container}>
        <Card> 
        <Text>{item['title']}</Text>
        <Text>{item['body']}</Text>
        <View style={styles.rating}>
        <Text> Gamezone Rating :</Text>
        <Image source={images.rating[rating]}/>
        </View>
        </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    rating : {
        flexDirection : 'row',
        justifyContent : 'center',
        paddingTop : 16,
        marginTop : 16,
        borderTopWidth : 1,
        borderTopColor :'#eee',
    }
})