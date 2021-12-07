import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.Background}>
      <KeyboardAvoidingView style={styles.Container}>
        <Image style={styles.Logo} source={require('../../assets/Logo.png')} />
        <View style={styles.AreaInput}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.Input}
            placeholderTextColor="rgba(255,255,255,0.2)"
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.AreaInput}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.Input}
            placeholderTextColor="rgba(255,255,255,0.2)"
            secureTextEntry
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.LinkText}>Criar uma conta</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  Logo: {
    marginBottom: 25,
  },
  AreaInput: {
    flexDirection: 'row',
  },
  Input: {
    backgroundColor: '#222',
    width: '80%',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 5,
    padding: 8,
    borderRadius: 5,
  },
  Button: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b94a',
    width: '80%',
    height: 45,
    borderRadius: 5,
    marginTop: 10,
  },
  ButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  LinkText: {
    marginTop: 10,
    color: '#FFF',
  },
});

export default SignIn;
