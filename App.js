import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <Text>PIPIPI</Text>
      <Image
        src='https://pbs.twimg.com/media/E4btIa3WUAIEpDW.jpg'
        style={styles.image}
      />
      <TextInput
        placeholder='who is she?'
        onChangeText={text => setValue(text)}
      />
      <Text>
        {value}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
