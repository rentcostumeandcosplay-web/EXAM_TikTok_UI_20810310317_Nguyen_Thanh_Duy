import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Animated, Easing, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForYouScreen() {
  const navigation = useNavigation();
  
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const FOR_YOU_COMMENTS = [
    { id: '1', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '2', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '3', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '4', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '5', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '6', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '7', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '8', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '9', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '10', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '11', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '12', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
    { id: '13', user: 'martini_rond', text: 'How neatly I write the date in my book', likes: '8098', time: '22h' },
  ];

  return (
    <ImageBackground 
      source={require('../screenshots/background_for_you.png')}
      style={styles.container}
    >
      <View style={styles.rightMenu}>
        <View style={styles.iconContainer}>
          <View style={styles.avatarContainer}>
             <Image 
                source={require('../screenshots/user_for_you.png')} 
                style={styles.avatarImage} 
             />
             <View style={styles.plusIcon}>
                <Ionicons name="add" size={12} color="#fff"/>
             </View>
          </View>
        </View>

        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="heart" size={35} color="#fff" />
          <Text style={styles.iconText}>328.7K</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconContainer} 
          onPress={() => navigation.navigate('CommentsScreen', { 
          data: FOR_YOU_COMMENTS, 
          count: 579,
          bgSource: require('../screenshots/background_for_you.png') 
        })}
        >
          <Ionicons name="chatbubble-ellipses" size={35} color="#fff" />
          <Text style={styles.iconText}>579</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="arrow-redo" size={35} color="#fff" />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomText}>
          <Text style={styles.username}>@craig_love</Text>
          <Text style={styles.description}>The most satisfying Job #fyp #satisfying</Text>
          <View style={styles.musicWrapper}>
            <Ionicons name="musical-notes" size={16} color="#fff" style={{marginRight: 5}} />
            <Text style={styles.music}>Roddy Ricch - The Box</Text>
          </View>
        </View>

        <Animated.View style={[styles.vinylWrapper, { transform: [{ rotate: spin }] }]}>
          <Image 
            source={require('../screenshots/Solid_Snake.png')}
            style={styles.vinylDisc} 
          />
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'flex-end' },
  rightMenu: { position: 'absolute', right: 10, bottom: 110, alignItems: 'center' },
  iconContainer: { alignItems: 'center', marginBottom: 20 },
  avatarContainer: { width: 50, height: 50, alignItems: 'center', justifyContent: 'center' },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
  },
  plusIcon: { 
    backgroundColor: '#EE1D52', 
    borderRadius: 10, 
    position: 'absolute', 
    bottom: -5, 
    width: 20, 
    height: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000'
  },
  iconText: { color: '#fff', marginTop: 5, fontSize: 12, fontWeight: 'bold' },
  bottomSection: { flexDirection: 'row', alignItems: 'flex-end', padding: 20, paddingBottom: 40 },
  bottomText: { flex: 1 },
  username: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  description: { color: '#fff', marginBottom: 10, fontSize: 14 },
  musicWrapper: { flexDirection: 'row', alignItems: 'center' },
  music: { color: '#fff', fontSize: 13 },
  vinylWrapper: { width: 50, height: 50, justifyContent: 'center', alignItems: 'center' },
  vinylDisc: { 
    width: 45, 
    height: 45, 
    borderRadius: 22.5, 
    borderWidth: 8, 
    borderColor: '#333' 
  }
});