import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AuthContext} from '../../contexts/auth';

const Home = () => {
  const {signOut} = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };
  return (
    <View style={styles.Background}>
      <View style={styles.Container}>
        <Text>Ops...</Text>
        <TouchableOpacity style={styles.Button} onPress={handleSignOut}>
          <Text style={styles.TextButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: '#131313',
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b94a',
    width: 150,
    height: 35,
    borderRadius: 5,
  },
  TextButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
