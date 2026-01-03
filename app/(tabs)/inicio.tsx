import { Dimensions, Image, Pressable, StyleSheet, TextInput } from 'react-native';

import ListaHorizontal from '@/components/header/ListaHorizontal';
import { Text, View } from '@/components/Themed';
import { Stack } from 'expo-router';
import React from 'react';

import { ScrollView } from 'react-native'; // Asegúrate de importar ScrollView

const { width } = Dimensions.get('window');

interface Item {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
  promocion: string;
  precio: string;
}

const dataTest: Item[] = [
  { id: '1', imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN4W_HL7dR9t814IP6QBNk6yma3RvyTga_dCRX6j-unAuQB0HR8LltqqwbnRpCx3Yga7uPPbtKYycRuF7bW6GuMbKcVVOTDeMnpW1CZmnf-sk_n70D5l0BKwdHPaHNI3MqlreEbvHbzEw/s200/kunkka.gif', titulo: 'Item 1', descripcion: 'Descripción del Item 1, mas descripcion del item 1', promocion: '20% de descuento', precio: '$100' },
  { id: '2', imagen: 'https://hmecuador.vtexassets.com/unsafe/1280x0/center/middle/https%3A%2F%2Fhmecuador.vtexassets.com%2Farquivos%2Fids%2F3920761%2FCamisa-en-mezcla-de-lino---Crema-Rayas---H-M-EC.jpg%3Fv%3D639006190524970000', titulo: 'Item 2', descripcion: 'Descripción del Item 2, mas descripcion del item 1', promocion: '30% de descuento', precio: '$150' },
  { id: '3', imagen: 'https://paylessec.vtexassets.com/arquivos/ids/443839-1200-1200?v=638482178050970000&width=1200&height=1200&aspect=true', titulo: 'Item 3', descripcion: 'Descripción del Item 3, mas descripcion del item 1', promocion: '10% de descuento', precio: '$200' },
  { id: '4', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 4', descripcion: 'Descripción del Item 4, mas descripcion del item 1', promocion: '15% de descuento', precio: '$250' },
  { id: '5', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 5', descripcion: 'Descripción del Item 5, mas descripcion del item 1', promocion: '5% de descuento', precio: '$300' },
  { id: '6', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 6', descripcion: 'Descripción del Item 6, mas descripcion del item 1', promocion: '25% de descuento', precio: '$350' },
  { id: '7', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 7', descripcion: 'Descripción del Item 7, mas descripcion del item 1', promocion: '35% de descuento', precio: '$400' },
  { id: '8', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 8', descripcion: 'Descripción del Item 8, mas descripcion del item 1', promocion: '40% de descuento', precio: '$450' },
  { id: '9', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 9', descripcion: 'Descripción del Item 9, mas descripcion del item 1', promocion: '45% de descuento', precio: '$500' },
  { id: '10', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 10', descripcion: 'Descripción del Item 10, mas descripcion del item 1', promocion: '50% de descuento', precio: '$550' },
];

const splitIntoColumns = (data: Item[]) => {
  const left: Item[] = [];
  const right: Item[] = [];

  data.forEach((item, index) => {
    if (index % 2 === 0) {
      left.push(item);
    } else {
      right.push(item);
    }
  });

  return [left, right];
};

const [leftColumn, rightColumn] = splitIntoColumns(dataTest);

const renderItem = (item: Item, customHeight: number) => (
  <View key={item.id} style={styles.card}>
    <Image
      source={{ uri: item.imagen }}
      // Aplicamos la altura personalizada aquí para ver el efecto
      style={[styles.imageItem, { height: customHeight }]}
      resizeMode="cover"
    ></Image>
    <Text style={styles.itemTitle}>{item.titulo}</Text>
    <Text style={styles.itemDescription} numberOfLines={2}>{item.descripcion}</Text>
  </View>
);


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
      ></Image>

      <ScrollView contentContainerStyle={styles.mainScroll}>
        <View style={styles.masonryContainer}>

          {/* COLUMNA IZQUIERDA */}
          <View style={styles.column}>
            {leftColumn.map((item) => renderItem(item, 200))}
          </View>

          {/* COLUMNA DERECHA */}
          <View style={styles.column}>
            {rightColumn.map((item) => renderItem(item, 300))}
          </View>

        </View>
      </ScrollView>

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


  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  // Para la Opción 1 (FlatList numColumns)
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  // Para la Opción 2 (Columnas manuales)
  mainContainer: {
    flexDirection: 'row', // Ponemos las columnas una al lado de la otra
    padding: 10,
  },

  itemDescripcion: {
    fontSize: 12,
    marginTop: 4,
  },

  itemPromocion: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },

  itemPrecio: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },

  mainScroll: {
    paddingBottom: 10, // Espacio al final
  },
  masonryContainer: {
    flexDirection: 'row', // Esto pone las columnas una al lado de la otra
    paddingHorizontal: 5,
    alignItems: 'flex-start', // Importante para que no estire las tarjetas
  },
  column: {
    flex: 1, // Cada columna toma la mitad del ancho
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    margin: 3, // Espacio entre tarjetas
    overflow: 'hidden',
    // Sombras
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageItem: {
    width: '100%',
    // La altura ahora viene definida por el parámetro customHeight
  },
  itemTitle: {
    fontWeight: 'bold',
    padding: 8,
    paddingBottom: 2,
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
    paddingHorizontal: 8,
    paddingBottom: 10,
  }

});
