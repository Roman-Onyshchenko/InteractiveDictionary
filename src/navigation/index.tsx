import { Button } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import type { RouteConfig, StackNavigationState } from '@react-navigation/core';

import AddWordScreen from '../routes/AddWord';
import LearningScreen from '../routes/Learning';
import StatisticsScreen from '../routes/Statistics';
import WordsListScreen from '../routes/WordsList';
import type { AppStackParamList } from '../types/navigation';

type AppStackRoutesType = RouteConfig<
  AppStackParamList,
  keyof AppStackParamList,
  StackNavigationState<AppStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;

const Stack = createNativeStackNavigator<AppStackParamList>();

const appStackNavigatorProps: Omit<React.ComponentProps<typeof Stack.Navigator>, 'children'> = {
  screenOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const appStackRoutes: Array<AppStackRoutesType> = [
  {
    name: 'AddWord',
    component: AddWordScreen,
    options: {
      title: 'Add a new word',
      headerRight: () => <Button onPress={() => false} title="Info" color="#fff" />,
    },
  },
  {
    name: 'Learning',
    component: LearningScreen,
  },
  {
    name: 'Statistics',
    component: StatisticsScreen,
  },
  {
    name: 'WordsList',
    component: WordsListScreen,
  },
];

export { Stack, appStackNavigatorProps, appStackRoutes };
