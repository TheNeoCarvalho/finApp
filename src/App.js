import React from 'react';
import firebase from './services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Welcome to React Native!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
