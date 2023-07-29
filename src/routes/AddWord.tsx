import React from 'react';
import { Button, Text, View } from 'react-native';

export default function AddWordScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Word Screen</Text>
        <Button title="Go to Learning" onPress={() => navigation.navigate('Learning')} />
        <Button title="Go to WordsList" onPress={() => navigation.navigate('WordsList')} />
        <Button title="Go to Statistics" onPress={() => navigation.navigate('Statistics')} />
      </View>
    </>
  );
}
