import React from 'react';
import { Button, Text, View } from 'react-native';

export default function WordsListScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Words List Screen</Text>
      <Button title="Go to AddWord" onPress={() => navigation.navigate('AddWord')} />
      <Button title="Go to Statistics" onPress={() => navigation.navigate('Statistics')} />
      <Button title="Go to Learning" onPress={() => navigation.navigate('Learning')} />
    </View>
  );
}
