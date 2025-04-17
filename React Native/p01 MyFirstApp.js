import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!!</Text>
      <Text>Hello Nepal</Text>
    </View>
  );
}


//Text is used to show text on the screen unlike <h1> , <p> , it uses <Text>
//View is like div in html........its generally a container to group other components

{/* <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
This creates a container for layout.

style={...} is how we apply styles in React Native (with objects).

flex: 1 → Tells the View to take up all available space.

justifyContent: 'center' → Aligns content vertically in the center.

alignItems: 'center' → Aligns content horizontally in the center.

📐 So this View centers everything inside it — both vertically and horizontally */}




