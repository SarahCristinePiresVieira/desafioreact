import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.Text}>mari querida meu coração por ti bate, como um caroço de abacate!!!!!!</Text>

      <Image source={require('./assets/adaptive-icon.png')}
             style={{width:200, height:200}} />

      <Button title={'Clique Aqui'} onPress={() =>alert("VC CLICOU")} />
      <StatusBar style="auto" translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: {
    fontSize: 65,
    color: 'red',

  }
});






