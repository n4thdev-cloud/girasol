import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarItemStyle: { paddingBottom: 10, height: 80 },
      }}>
      <Tabs.Screen
        name="inicio"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) =>
            <TabBarIcon name="home" color={color} ></TabBarIcon>,
        }}
      />
      <Tabs.Screen
        name="categoria"
        options={{
          title: 'Categorías',
          tabBarIcon: ({ color }) =>
            <TabBarIcon name="list-ul" color={color} ></TabBarIcon>,
        }}
      />
      <Tabs.Screen
        name="carrito"
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color }) =>
            <TabBarIcon name="shopping-cart" color={color} ></TabBarIcon>,
        }}
      />
      <Tabs.Screen
        name="usuaria"
        options={{
          title: 'Tú',
          tabBarIcon: ({ color }) =>
            <TabBarIcon name="user" color={color} ></TabBarIcon>,
        }}
      />


    </Tabs>
  );
}
