import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from "@expo/vector-icons/MaterialIcon"
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import LibaryScreen from "./screens/LibraryScreen";
import PremiumScreen from "./screens/PremiumScreen";
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
          tabBarstyle:{
            height: 65,
            paddingTop:10,
            backgroundColor:"rgb(0,0,0)",
            borderTopwidth:0,
          },
          
      }}>
        <Tab.Screen name ="Home" component={HomeScreen}/>
        <Tab.Screen name="Search" component={SearchScreen}/>
        <Tab.Screen name="Library" component={LibaryScreen}/>
        <Tab.Screen name="Premium" component={PremiumScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
