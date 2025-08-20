import { View, Text, Button } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.View}>
      <Text>firstApp</Text>
      <View  style={styles.Button}>
      <Button  onPress={()=>null} title="PRESS ME" />
      </View>
    </View>
  );
};

export default App;

const styles = {
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  Button: {
width: '100%',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0000',
    color: '#fff'
  }
}