import { View, Button, Text, StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button
                title="Go to Paris"
                onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
            />
            {/* Button for London */}
            <Button
                title="Go to London"
                onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
            />
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