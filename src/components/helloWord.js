import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { stylesHelloWorld } from '../../style/stylesHelloWorld';


export default function HelloWord() {
  return (
    <View style={stylesHelloWorld.container}>
      <Text>Start App</Text>
      <Text>Hello Word</Text>
      <StatusBar style="auto" />
    </View>
  );
}

