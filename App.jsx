import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';


const App = () => {
    const [message, setMessage] = useState("I am learning React Native step by step with this app!");

  const handlePress = () => {
    setMessage("🎉 You clicked the button! Keep learning and building 🚀");
  };
  return (
     <View style={styles.container}>
      <Text style={styles.title}>📱 My First Mobile App</Text>
      <Text style={styles.subtitle}>{message}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Click Me" onPress={handlePress} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  note: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
  },
});

export default App;

