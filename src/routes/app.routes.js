import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';

import {AuthContext} from '../contexts/auth';

const HomeStack = createStackNavigator();

const AppRoutes = () => {
  const {user} = useContext(AuthContext);
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: `Bem vindo, ${user.name}`,
          headerTintColor: '#00b94a',
          headerStyle: {
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a',
          },
        }}
      />
    </HomeStack.Navigator>
  );
};

export default AppRoutes;
