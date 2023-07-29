import React from 'react';
import { Button, Text, View } from 'react-native';

export default function StatisticsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics Screen</Text>
      <Button title="Go to AddWord" onPress={() => navigation.navigate('AddWord')} />
      <Button title="Go to WordsList" onPress={() => navigation.navigate('WordsList')} />
      <Button title="Go to Learning" onPress={() => navigation.navigate('Learning')} />
    </View>
  );
}
