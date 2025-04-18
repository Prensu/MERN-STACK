import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableHighlight onPress={() => alert('You pressed Highlight')}>
        <Text style={{ padding: 10, backgroundColor: 'orange', fontSize: 20 }}>
          Highlight Me
        </Text>
      </TouchableHighlight>
    </View>
  );
}


