import React, {useState, useContext} from 'react';
import {
  Platform,
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';

const SignIn = () => {
  const navigation = useNavigation();
  const {signUp} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = () => {
    signUp(email, password, name);
  };

  return (
    <View style={styles.Background}>
      <KeyboardAvoidingView
        style={styles.Container}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled>
        <Image style={styles.Logo} source={require('../../assets/Logo.png')} />
        <View style={styles.AreaInput}>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={styles.Input}
            placeholderTextColor="rgba(255,255,255,0.2)"
            placeholder="Name"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
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
        <TouchableOpacity style={styles.Button} onPress={handleSignUp}>
          <Text style={styles.ButtonText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.LinkText}>Já possuo uma conta, fazer login</Text>
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
    fontSize: 14,
    marginTop: 15,
    color: '#FFF',
  },
});

export default SignIn;
