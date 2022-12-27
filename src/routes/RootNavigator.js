import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../constants/screens';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login/indexB';
import CartScreen from '../screens/cart';
import HomeScreen from '../screens/home';
import PaymentProfileScreen from '../screens/paymentProfile';
import ProfileScreen from '../screens/myProfile';
import HistoryScreen from '../screens/historyScreen';
import DeliveryScreen from '../screens/delivery';
import PaymentScreen from '../screens/payment';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.CART}
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.PAYMENT_PROFILE}
          component={PaymentProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.PROFILE}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.HISTORY}
          component={HistoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.DELIVERY}
          component={DeliveryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.PAYMENT}
          component={PaymentScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
