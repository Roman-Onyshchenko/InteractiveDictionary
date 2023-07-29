import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDumbStore } from '../store';

export default function AddWordScreen({ navigation }: { navigation: any }) {
  const dumbText = useDumbStore(state => state.dumbText);
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Word Screen and {dumbText}</Text>
        <Button title="Go to Learning" onPress={() => navigation.navigate('Learning')} />
        <Button title="Go to WordsList" onPress={() => navigation.navigate('WordsList')} />
        <Button title="Go to Statistics" onPress={() => navigation.navigate('Statistics')} />
      </View>
    </>
  );
}
