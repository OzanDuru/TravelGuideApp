// App.js
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ color: 'red' }}>Navigation Ready!</Text>
      </View>
    </NavigationContainer>
  );
}
