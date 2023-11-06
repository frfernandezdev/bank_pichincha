import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  GestureResponderEvent,
} from 'react-native';

type ItemListProps = {
  id: string;
  title: string;
  onPress: (event?: GestureResponderEvent) => void;
};

export default function ItemList({id, title, onPress}: ItemListProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>ID: {id}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: '#656565',
  },
});
