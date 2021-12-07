import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from './services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Routes from './routes';

import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
