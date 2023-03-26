import * as React from 'react';
import HomeScreen from './src/pages/HomeScreen';
import PlayerScreen from './src/pages/PlayerScreen';
import PlayListScreen from './src/pages/PlayListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeIcon from "./src/assets/images/home_icon.png"
import { Text, View, Image, StyleSheet, Pressable, Button } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          title: 'It All Starts Here!',
          headerStyle: {
            backgroundColor: 'rgb(51, 53, 69)',
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerRight: () => (
            <View style={styles.iconContainer}>
              <Button
                title="Use Apps"
                color="rgb(236, 94, 113)"
                backgroundColor="rgb(236, 94, 113)"
                style={{ textTransform: "capitalize" }}
              />
              <AntDesign name="search1" size={24} color="#fff" style={styles.searchIcons} />
            </View>


          ),

          tabBarIcon: ({ focused, color, size }) => (
            <Image source={HomeIcon} alt="HomeIcon" size={size} style={{ width: 25, height: 25, color: focused ? 'rgb(236, 94, 113)' : color }} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? 'rgb(236, 94, 113)' : color }}>Home</Text>
          ),
        }} />
        <Tab.Screen name="Buzz" component={PlayerScreen} options={{
          headerStyle: {
            backgroundColor: 'rgb(51, 53, 69)',
          },
          headerTitleStyle: {
            color: '#fff'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="bucket" style={{ color: focused ? 'rgb(236, 94, 113)' : color }} size={size} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? 'rgb(236, 94, 113)' : color }}>Buzz</Text>
          ),
        }} />
        <Tab.Screen name="Profile" component={PlayListScreen} options={{
          headerStyle: {
            backgroundColor: 'rgb(51, 53, 69)',
          },
          headerTitleStyle: {
            color: '#fff'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person" style={{ color: focused ? 'rgb(236, 94, 113)' : color }} size={size} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? 'rgb(236, 94, 113)' : color }}>Profile</Text>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  },
  headerButton: {
    textTransform: "capitalize"
  },
  searchIcons: {
    textAlign: "center",
    flex: 1
  }
});


export default App;