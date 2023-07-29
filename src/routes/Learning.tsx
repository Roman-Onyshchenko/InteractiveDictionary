import React from 'react';
import { Button, Text, View } from 'react-native';

export default function LearningsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Learning Screen</Text>
      <Button title="Go to AddWord" onPress={() => navigation.navigate('AddWord')} />
      <Button title="Go to WordsList" onPress={() => navigation.navigate('WordsList')} />
      <Button title="Go to Statistics" onPress={() => navigation.navigate('Statistics')} />
    </View>
  );
}
