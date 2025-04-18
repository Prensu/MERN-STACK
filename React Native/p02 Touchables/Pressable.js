import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => alert('Pressed with Pressable')}>
        <Text style={{ padding: 10, backgroundColor: 'skyblue', fontSize: 20 }}>
          Press Me
        </Text>
      </Pressable>
    </View>
  );
}
