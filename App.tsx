import * as React from 'react';
import { View, TouchableOpacity, NativeModules, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { appStackRoutes, appStackNavigatorProps, Stack } from './src/navigation';

function DebugApp() {
  return (
    <TouchableOpacity
      style={{ alignSelf: 'center' }}
      onPress={() => {
        NativeModules.DevMenu.reload();
      }}
      onLongPress={() => {
        NativeModules.DevMenu.show();
      }}>
      <View style={{ backgroundColor: 'orange', width: Dimensions.get('window').width, height: 20 }} />
    </TouchableOpacity>
  );
}

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator {...appStackNavigatorProps}>
          {appStackRoutes.map(stackRoute => (
            <Stack.Screen key={stackRoute.name} {...stackRoute} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
      <DebugApp />
    </View>
  );
}

export default App;
