import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CommentsScreen({ route, navigation }) {
  const { data, count, bgSource } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.commentItem}>
      <Ionicons name="person-circle" size={35} color="#ccc" />
      <View style={styles.commentTextContainer}>
        <Text style={styles.commentUser}>{item.user}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
        <View style={styles.commentFooter}>
          <Text style={styles.commentTime}>{item.time}</Text>
          <Text style={styles.replyText}>Reply</Text>
        </View>
      </View>
      <View style={styles.heartContainer}>
        <Ionicons name="heart-outline" size={15} color="#666" />
        <Text style={styles.likeCount}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={bgSource} style={styles.container}>
      <TouchableOpacity 
        style={styles.dismissArea} 
        onPress={() => navigation.goBack()} 
      />
      
      <View style={styles.commentSheet}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{count} comments</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  dismissArea: { flex: 1 },
  commentSheet: {
    height: '70%', 
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontWeight: 'bold', fontSize: 14 },
  listContent: { paddingBottom: 20 },
  commentItem: { flexDirection: 'row', padding: 15, alignItems: 'flex-start' },
  commentTextContainer: { flex: 1, marginLeft: 10 },
  commentUser: { color: '#666', fontSize: 13, marginBottom: 2 },
  commentText: { color: '#000', fontSize: 14 },
  commentFooter: { flexDirection: 'row', marginTop: 5 },
  commentTime: { color: '#999', fontSize: 12, marginRight: 15 },
  replyText: { color: '#999', fontSize: 12, fontWeight: 'bold' },
  heartContainer: { alignItems: 'center' },
  likeCount: { color: '#999', fontSize: 11, marginTop: 2 }
});