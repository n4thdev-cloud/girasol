import { Dimensions, Image, Pressable, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import ListaHorizontal from '@/components/header/ListaHorizontal';
import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import React from 'react';

const { width } = Dimensions.get('window');


export default function TabOneScreen() {


  return (
    <>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <><View style={styles.searchContainer}>
              <TextInput placeholder="Buscar..." style={styles.input}>
              </TextInput>
              <Pressable style={styles.button}>
                <Text>🔍</Text>
              </Pressable>

            </View>
            </>
          ),
          headerStyle: { backgroundColor: '#dbe51aff' },

        }}>

      </Stack.Screen>
      <ListaHorizontal></ListaHorizontal>
      <Image
        source={{ uri: 'https://alohacamp.com/es/travels/wp-content/uploads/2024/09/montanas-de-espana-ZW.webp' }}
        style={styles.image}
        resizeMode="cover"
      >
      </Image>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Tab </Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" ></View>
        <EditScreenInfo path="app/(tabs)/index.tsx"></EditScreenInfo>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#d314d6ff",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },


  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 32, // Ancho de pantalla menos márgenes
    backgroundColor: '#15dfeaff',
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 40,
    marginTop: 0,
  },
  button: {
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,          // 🔥 ocupa todo el espacio disponible
    height: '100%',
    paddingHorizontal: 10,
  },
  image: {
    width: width,
    height: 100, // obligatorio
  },

});
