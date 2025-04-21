import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false); // Modal visibility state

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Button to show modal */}
      <Button title="Show Modal" onPress={() => setVisible(true)} />

      {/* Modal box */}
      <Modal visible={visible} transparent={false}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }}>This is a simple Modal!</Text>
          <Button title="Close Modal" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
