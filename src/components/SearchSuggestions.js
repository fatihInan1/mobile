import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tag from './Tag';
import PostType from './PostType';

function SearchSuggestions() {
  return (
    <View style={styles.tags}>
      <Tag name="Frontend" type="tag" />
      <Tag name="Backend" type="tag" />
      <Tag name="Mobile" type="tag" />
      <Tag name="DevOps" type="tag" />
      <Tag name="İstanbul" type="location" />
      <Tag name="İzmir" type="location" />
      <Tag name="Ankara" type="location" />
      <Tag name="Remote" type="location" />
      <PostType type={1} style={styles.type} />
      <PostType type={2} style={styles.type} />
      <PostType type={3} style={styles.type} />
    </View>
  );
}

const styles = StyleSheet.create({
  tags: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: '5%',
  },
  type: {
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: '#FFF',
    borderColor: '#bbb',
    color: '#666',
  },
});

export default SearchSuggestions;
