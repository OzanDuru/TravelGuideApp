import { View, Text, Button, StyleSheet } from 'react-native';

export default function Details({ route, navigation }) {
    const { place, rating } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to {place}!</Text>
            {rating === 5 ? (
                <Text>This place is highly rated!</Text>
            ) : (
                <Text>This place has a {rating}-star rating.</Text>
            )}
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 24,
      marginBottom: 16
    }
  });