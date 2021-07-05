import * as React from 'react';
import {  View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homestack from './homestack';
import Aboutstack from './aboutStack';


const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homestack} />
        <Drawer.Screen name="About" component={Aboutstack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}














// // import { createDrawerNavigator } from ""
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import Aboutstack from "./aboutStack";
// import Homestack from "./homestack";
// const RootDrawerNavigator = createDrawerNavigator({
//     Home:{
//         screen :Homestack,
//     },
//     About:{
//         screen : Aboutstack
//     }
// })
// const Stack = createStackNavigator();
// <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailsScreen} />
// </Stack.Navigator>
// export default createAppContainer(RootDrawerNavigator);