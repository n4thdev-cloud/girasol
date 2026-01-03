import { Dimensions, FlatList, Image, Pressable, StyleSheet, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';

const { width } = Dimensions.get('window');

export default function TabTwoScreen() {
  
  const dataCatalogo = [
    { id: "1", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 1, descipcion larga,Item 1, descipcion larga, Item 1, descipcion larga" },
    { id: "2", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 2, descipcion larga" },
    { id: "3", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 3" },
    { id: "4", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 4, descipcion larga" },
    { id: "5", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 5, descipcion larga" },
    { id: "6", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 6" },
    { id: "7", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 7" },
    { id: "8", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 8, descipcion larga" },
    { id: "9", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 9" },
    { id: "10", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 10" },
    { id: "11", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 11, descipcion larga" },
    { id: "12", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 12" },
    { id: "13", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 13" },
    { id: "14", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 14" },
    { id: "15", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 15" },
  ];

  const ofertas = [
    { id: "1", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "2", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "3", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "4", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "5", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "6", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "7", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "8", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "9", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "10", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "11", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "12", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "13", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "14", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },
    { id: "15", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' },

  ];

  return (

    <>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#dbe51aff' },
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
        }}>
      </Stack.Screen>

      <View style={styles.container}>
        {/* Lista izquierda (30%) */}

        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.headerTitleIzquierda}>🔥 Ofertas</Text>
          )}
          data={ofertas}
          keyExtractor={(item) => item.id}
          style={styles.leftList}
          renderItem={({ item }) => (

            <View style={styles.leftItem}>

              <Image
                source={{ uri: item.imagen }}
                style={[styles.imageItemMasVendido]}
                resizeMode="cover"
              ></Image>
            </View>
          )}
        ></FlatList>
        {/* Lista derecha (70%) */}
        <FlatList
          ListHeaderComponent={() => (
            <Text style={styles.headerTitleDerecha}>Categorías</Text>
          )}
          data={dataCatalogo}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={styles.rightList}
          renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.imagen }}
              style={[styles.imageItem]}
              resizeMode="cover"
            ></Image>
            <Text numberOfLines={2} ellipsizeMode="tail" 
            style={[styles.textItemCategoria]}>{item.categoria}</Text>
          </View>

          )}
        ></FlatList>

      </View>




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

  container: {
    flex: 1,
    flexDirection: "row", // 👈 columnas
  },
  leftList: {
    width: "30%", // 👈 30%
    backgroundColor: "#f2f2f2",
  },
  headerTitleIzquierda: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 4,
    backgroundColor: "#fff",
  },
  headerTitleDerecha: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 4,
    backgroundColor: "#fff",
  },
  rightList: {
    width: "70%", // 👈 resto
    backgroundColor: "#8cd498ff",
  },

  leftItem: {
    paddingHorizontal: 6,
    paddingTop: 6
  },

  rightItem: {
    padding: 16,
  },
  //Flalist Mas Vendido
  imageItemMasVendido: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },



  // FlatList Categorias
  imageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
    backgroundColor: "#a8d8a8",

  },
  imageItem: {
    width: 100,
    height: 100,
    padding: 16,
    borderRadius: 64,

    // La altura ahora viene definida por el parámetro customHeight
  },
  textItemCategoria: {
    fontSize: 12,
    marginTop: 4,
    paddingHorizontal: 12,
    textAlign: 'center',
  },

});