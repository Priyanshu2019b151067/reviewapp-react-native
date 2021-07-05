import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity, StatusBar,Modal,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {globalStyles} from '../styles/global.js'
import { useState } from 'react';
import ReviewForm from './reviewform'
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card'
export default function Home({navigation}) {
   const [reviews, setreviews] = useState([
       {title : 'Title 1', rating : 1, body : 'body 1' , key : '1'},
       {title : 'Title 2', rating : 2, body : 'body 2' , key : '2'},
       {title : 'Title 3', rating : 3, body : 'body 3' , key : '3'},
       {title : 'Title 4', rating : 4, body : 'body 4' , key : '4'},
   ])
   const addReview = (review) =>{
       review.key= Math.random().toString();
       setreviews((currentview) => {
           return [review,...reviews];
       })
       setmodalOpen(false);
   }
   const [modalOpen, setmodalOpen] = useState(false)
    return (
        <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
        <MaterialIcons name='close' size={24} onPress={()=>setmodalOpen(false)} style={{...styles.modalToggle , ...styles.modalCross}} />
        <ReviewForm addReview = {addReview}/>
        </View>
        </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons name='add' size={24} onPress={()=>setmodalOpen(true)} style={styles.modalToggle}/>
        <FlatList 
        data = {reviews}
        renderItem = {({item})=> (
            <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',{item : item})}>
            <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
            </TouchableOpacity>
        )}
        />
        </View>
    )

}
const styles = StyleSheet.create({
    modalToggle : {
        marginBottom :10,
        borderWidth :1,
        borderColor :'#f2f2f2',
        padding: 10,
        borderRadius :10,
        alignSelf : 'center',
    },
    modalContent :{
        flex: 1,
    },
    modalCross:{
        marginTop :20,
        marginBottom :0,

    }
})