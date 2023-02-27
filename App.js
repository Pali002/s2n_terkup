import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState('');

  function calcVolume() {

    let localVolume = 1/3 * Math.pow(radius, 2) * Math.PI * height;
    console.log(localVolume);
    setVolume(localVolume);
  }
    

  return (
    <View style={styles.container}>
      <Text style={styles.about}>Zentai Pál, Szoft-II-N, 2023-02-27</Text>
      <Text style={styles.titles}>Feladat 0301 megoldása</Text>
      <Text>Kúp térfogatának számítása</Text>
      
      <Text>Sugár</Text>
      <TextInput style={styles.inputField}
      onChangeText={(radius) => setRadius(radius)}/>

      <Text>Magasság</Text>
      <TextInput style={styles.inputField}
      onChangeText={(height) => setHeight(height)}/>

      <TouchableHighlight
      style={styles.button}
      onPress={calcVolume}>
        <Text style={styles.buttonText}>Számít</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lawngreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    width: '90%',
    height: 25
  },
  button: {
    backgroundColor: 'fuchsia',
    width: '90%',
    textAlign: 'center',
    borderRadius: 3,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
  },
  about: {
    backgroundColor: 'yellow',
    padding: 3,
    borderRadius: 3
  },
  titles: {
    marginTop: 10,
    marginBottom: 10
  }
});
