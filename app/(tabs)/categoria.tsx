import { Dimensions, FlatList, Image, Pressable, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';

const { width } = Dimensions.get('window');

export default function TabTwoScreen() {

  const dataCatalogo = [
    { id: "1", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 1" },
    { id: "2", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 2" },
    { id: "3", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 3" },
    { id: "4", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 4" },
    { id: "5", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 5" },
    { id: "6", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 6" },
    { id: "7", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 7" },
    { id: "8", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 8" },
    { id: "9", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 9" },
    { id: "10", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 10" },
    { id: "11", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 11" },
    { id: "12", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 12" },
    { id: "13", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 13" },
    { id: "14", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 14" },
    { id: "15", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: "Item 15" },
  ];

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
      <FlatList
        data={dataCatalogo}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.imagen }}
                // Aplicamos la altura personalizada aquí para ver el efecto
                style={[styles.imageItem]}
                resizeMode="cover"
              ></Image>
            </View>
            <Text>{item.titulo}</Text>
          </View>
        )}
      ></FlatList>

    </>


  );
}

const styles = StyleSheet.create({

  //Header
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
  // FlatList Categorias
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "30%", // 👈 clave para 3 columnas
    backgroundColor: "rgba(0, 0, 0, 0.0)", // 👈 solo el fondo
    paddingTop: 6,
    margin: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: "hidden", // 👈 CLAVE
  },
  imageItem: {
    width: "100%",
    height: "100%",
    // La altura ahora viene definida por el parámetro customHeight
  },


});