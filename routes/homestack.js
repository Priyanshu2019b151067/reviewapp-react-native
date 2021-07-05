import * as React from 'react';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewdetails'
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/headers';
const Stack = createStackNavigator();

export default function Homestack({navigation}){
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={
          {
            headerTitle: props => <Header navigation={navigation} title="GAMEZONE"/> 
          }
      } component={Home} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
  );
}














// import { createStackNavigator } from "react-navigation-stack";

// import Home from '../screens/home'
// import ReviewDetails from '../screens/reviewdetails'
// const screens = {
//     Home : {
//         screen : Home,
//         navigationOptions :{
//             title : 'Review Us',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize :30,
//                 marginBottom :10,
//               },
          
//         }
//     },
//     ReviewDetails :{
//         screen : ReviewDetails
//     }
// }
// const Homestack = createStackNavigator(screens,{
//     defaultNavigationOptions:{
//         headerTintColor: '#fff',
//         headerStyle :{  backgroundColor : '#185ADB'
//             ,height :60,}
//     }},)

// export default Homestack;