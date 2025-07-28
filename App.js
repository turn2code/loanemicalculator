import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import EMICalculator from './components/EmiCalculator';
import Simple from './Simple'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainAppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="EMI Calculator" component={EMICalculator} />

    {/* You can add more Tab Screens here */}
  </Tab.Navigator>
);

const OnboardingWrapper = ({ navigation }) => {
  const handleDone = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    navigation.replace('MainApp');
  };

  return <Simple onDone={handleDone} />;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      const value = await AsyncStorage.getItem('hasOnboarded');
      setShowOnboarding(value !== 'true');
      setIsLoading(false);
    };
    checkOnboarding();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {showOnboarding && (
            <Stack.Screen name="Onboarding" component={OnboardingWrapper} />
          )}
          <Stack.Screen name="MainApp" component={MainAppTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
