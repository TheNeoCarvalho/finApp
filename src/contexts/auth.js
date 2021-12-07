import React, {createContext, useState, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const loadStorage = async () => {
      const storageUser = await AsyncStorage.getItem('@auth_user');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoad(false);
      }
      setLoad(false);
    };
    loadStorage();
  }, []);

  const signOut = async () => {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  const signIn = async (email, password) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value')
          .then(snapshot => {
            let data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch(error => {
        alert(error.code);
      });
  };

  const signUp = async (email, password, name) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            saldo: 0,
            name: name,
            email: email,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch(error => {
        alert(error.code);
      });
  };

  const storageUser = async data => {
    await AsyncStorage.setItem('@auth_user', JSON.stringify(data));
  };

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, signOut, load}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
