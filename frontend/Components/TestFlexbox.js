import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function TestFlexbox() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the full available height
    flexDirection: 'row', // This sets the direction of the flexbox to horizontal
    justifyContent: 'space-between', // This distributes the child components evenly with space between them
    alignItems: 'center', // This aligns the child components vertically in the center
    padding: 16, // Optional: Add padding to the container
  },
  box1: {
    flex: 1, // This makes the box1 take up 1/3 of the available width
    height: 100,
    backgroundColor: '#737373',
  },
});
