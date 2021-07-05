import * as React from 'react';
import About from '../screens/about'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Header from '../shared/headers';
const Stack = createStackNavigator();

export default function Aboutstack({navigation}){
  return (
      <Stack.Navigator >
        <Stack.Screen  options={
          {
            headerTitle: props => <Header navigation={navigation} title="About Us"/> 
          }
        }
        name="About" component={About} />
      </Stack.Navigator>
  );
}



// import { createStackNavigator } from "react-navigation-stack";
// import About from '../screens/about'
// const screens = {
//     About : {
//         screen : About,
//         navigationOptions :{
//             title : 'About',
//         }
//     },
    
// }
// const Aboutstack = createStackNavigator(screens,{
//     defaultNavigationOptions:{
//         headerTintColor: '#fff',
//         headerStyle :{ 
//              backgroundColor : '#185ADB'
//             ,height :60,}
//     }},)

// export default Aboutstack;