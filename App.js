import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react';
import {StatusBar } from 'react-native';
import * as Font from 'expo-font'
import Home from "./screens/home";
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer'

  

const getfonts = () =>  Font.loadAsync({
  'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
});
export default function App() {
  const [fontloaded, setfontloaded] = useState(false);
  if(fontloaded)
  {
    return (
    <Navigator/>
    );
  }
  else{
    return(
        <AppLoading
        startAsync = {getfonts}
        onFinish = {() => setfontloaded(true)}
        onError = {()=>{console.log("error")}}
      />
    );
  }
}
