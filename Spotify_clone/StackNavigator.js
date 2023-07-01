import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

function Bottomtabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen  name="Home" 
            component={HomeScreen}
             options={{tabBarLabel:"Home", headerShown:false, 
             tabBarLabelStyle:{color:"white"},
             tabBarIcon:({focused}) =>
             focused ? {
                <Entypo name="home" size={24} color="black" />
            } : {
                <AntDesign name="home" size={24} color="black" />
                 }
            }}
             />
            <Tab.Screen name="Profile" component={}/>
        </Tab.Navigator>
    )
}