import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Handles navigation container
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Creates bottom tab navigation
import MathScreen from './screens/MathScreen'; // Import Math Screen
import ScienceScreen from './screens/ScienceScreen'; // Import Science Screen
import { Ionicons } from '@expo/vector-icons'; // Icon library

const Tab = createBottomTabNavigator(); // Initialize Tab Navigator

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            // Dynamically set icons for tabs
            let iconName;
            if (route.name === 'Math') iconName = 'calculator'; // Math tab icon
            else if (route.name === 'Science') iconName = 'book'; // Science tab icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue', // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
        })}
      >
        {/* Define tabs */}
        <Tab.Screen name="Math" component={MathScreen} />
        <Tab.Screen name="Science" component={ScienceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
