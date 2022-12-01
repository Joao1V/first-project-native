import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import TDList from "./src/components/TDList";
import Calculator from "./src/components/Calculator";


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'home'} screenOptions={{headerShown: false}}>
          <Stack.Screen name={'home'} component={Calculator} />
          <Stack.Screen name={'TDList'} component={TDList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
