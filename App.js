// App.js
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

import Home from './screens/Home';
import Details from './screens/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
