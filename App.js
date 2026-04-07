import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import ForYouScreen from './screens/ForYouScreen';
import FollowingScreen from './screens/FollowingScreen';
import CommentsScreen from './screens/CommentsScreen';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const EmptyScreen = () => <View style={{flex:1, backgroundColor:'#000'}} />;

function HomeTopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: 'transparent', 
          position: 'absolute', 
          top: 45, 
          left: '18%', 
          right: '18%', 
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
        tabBarIndicatorStyle: { 
          backgroundColor: '#fff', 
          height: 3, 
          width: 25, 
          marginLeft: '19%', 
          borderRadius: 2
        },
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 17, textTransform: 'none' },
      }}
    >
      <TopTab.Screen name="Following" component={FollowingScreen} />
      <TopTab.Screen name="For You" component={ForYouScreen} />
    </TopTab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? '#fff' : '#555'; 

        if (route.name === 'CommentsScreen') return null;

        const onPress = () => {
          if (route.name === 'HomeTab') navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem}>
            {route.name === 'Add' ? (
              <View style={styles.addButtonContainer}>
                <View style={styles.addButton}>
                  <Ionicons name="add" size={24} color="black" />
                </View>
              </View>
            ) : (
              <View style={styles.iconWrapper}>
                <Ionicons 
                  name={
                    route.name === 'HomeTab' ? 'home' : 
                    route.name === 'Discover' ? 'search' : 
                    route.name === 'Inbox' ? 'chatbubble-ellipses-outline' : 'person-outline'
                  } 
                  size={24} 
                  color={color} 
                />
                <Text style={[styles.tabLabel, { color }]}>
                  {route.name === 'HomeTab' ? 'Home' : route.name}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <BottomTab.Screen name="HomeTab" component={HomeTopTabs} />
        <BottomTab.Screen name="Discover" component={EmptyScreen} />
        <BottomTab.Screen name="Add" component={EmptyScreen} />
        <BottomTab.Screen name="Inbox" component={EmptyScreen} />
        <BottomTab.Screen name="Me" component={EmptyScreen} />
        <BottomTab.Screen name="CommentsScreen" component={CommentsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: Platform.OS === 'ios' ? 90 : 70, 
    borderTopWidth: 0.5,
    borderTopColor: '#333',
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    alignItems: 'center',
  },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  iconWrapper: { alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  tabLabel: { fontSize: 10, fontWeight: 'bold', marginTop: 4 },
  addButtonContainer: { justifyContent: 'center', alignItems: 'center', height: '100%' },
  addButton: {
    width: 45,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#69C9D0',
    borderRightWidth: 3,
    borderRightColor: '#EE1D52',
    marginTop: 5,
  }
});