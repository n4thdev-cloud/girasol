import { ActivityIndicator, Dimensions, Pressable, StyleSheet, TextInput } from 'react-native';

import ListaHorizontal from '@/components/header/ListaHorizontal';
import { Text, View } from '@/components/Themed';
import { router, Stack, useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native'; // Asegúrate de importar ScrollView
import { useProducto } from '../context/ProductoContext';

import { Image as ImageCache } from 'expo-image';

const { width } = Dimensions.get('window');


interface ImagenDetalle {
  id: string;
  ruta: string;
}

interface Item {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
  promocion: string;
  precio: string;
  imagenesAdicionales: ImagenDetalle[];
}

const dataTest: Item[] = [
  {
    id: '1', imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN4W_HL7dR9t814IP6QBNk6yma3RvyTga_dCRX6j-unAuQB0HR8LltqqwbnRpCx3Yga7uPPbtKYycRuF7bW6GuMbKcVVOTDeMnpW1CZmnf-sk_n70D5l0BKwdHPaHNI3MqlreEbvHbzEw/s200/kunkka.gif',
    titulo: 'Item 1', descripcion: 'Descripción del Item 1, mas descripcion del item 1', promocion: '20% de descuento', precio: '$100',
    imagenesAdicionales: [{ id: '1A', ruta: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg' }, 
      { id: '1B', ruta: 'https://paylessec.vtexassets.com/arquivos/ids/443839-1200-1200?v=638482178050970000&width=1200&height=1200&aspect=true' }]
  },
  {
    id: '2', imagen: 'https://hmecuador.vtexassets.com/unsafe/1280x0/center/middle/https%3A%2F%2Fhmecuador.vtexassets.com%2Farquivos%2Fids%2F3920761%2FCamisa-en-mezcla-de-lino---Crema-Rayas---H-M-EC.jpg%3Fv%3D639006190524970000', titulo: 'Item 2', descripcion: 'Descripción del Item 2, mas descripcion del item 1', promocion: '30% de descuento', precio: '$150',
    imagenesAdicionales: [{ id: '2A', ruta: 'https://hmecuador.vtexassets.com/unsafe/1280x0/center/middle/https%3A%2F%2Fhmecuador.vtexassets.com%2Farquivos%2Fids%2F3920761%2FCamisa-en-mezcla-de-lino---Crema-Rayas---H-M-EC.jpg%3Fv%3D639006190524970000' }]
  },
  {
    id: '3', imagen: 'https://paylessec.vtexassets.com/arquivos/ids/443839-1200-1200?v=638482178050970000&width=1200&height=1200&aspect=true', titulo: 'Item 3', descripcion: 'Descripción del Item 3, mas descripcion del item 1', promocion: '10% de descuento', precio: '$200',
    imagenesAdicionales: []
  },
  {
    id: '4', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 4', descripcion: 'Descripción del Item 4, mas descripcion del item 1', promocion: '15% de descuento', precio: '$250',
    imagenesAdicionales: []
  },
  {
    id: '5', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 5', descripcion: 'Descripción del Item 5, mas descripcion del item 1', promocion: '5% de descuento', precio: '$300',
    imagenesAdicionales: []
  },
  {
    id: '6', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 6', descripcion: 'Descripción del Item 6, mas descripcion del item 1', promocion: '25% de descuento', precio: '$350',
    imagenesAdicionales: []
  },
  {
    id: '7', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 7', descripcion: 'Descripción del Item 7, mas descripcion del item 1', promocion: '35% de descuento', precio: '$400',
    imagenesAdicionales: []
  },
  {
    id: '8', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 8', descripcion: 'Descripción del Item 8, mas descripcion del item 1', promocion: '40% de descuento', precio: '$450',
    imagenesAdicionales: []
  },
  {
    id: '9', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 9', descripcion: 'Descripción del Item 9, mas descripcion del item 1', promocion: '45% de descuento', precio: '$500',
    imagenesAdicionales: []
  },
  {
    id: '10', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 10', descripcion: 'Descripción del Item 10, mas descripcion del item 1', promocion: '50% de descuento', precio: '$550',
    imagenesAdicionales: []
  },
  {
    id: '11', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 11', descripcion: 'Descripción del Item 11, mas descripcion del item 1', promocion: '55% de descuento', precio: '$600',
    imagenesAdicionales: []
  },
  {
    id: '12', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 12', descripcion: 'Descripción del Item 12, mas descripcion del item 1', promocion: '60% de descuento', precio: '$650',
    imagenesAdicionales: []
  },
  {
    id: '13', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 13', descripcion: 'Descripción del Item 13, mas descripcion del item 1', promocion: '65% de descuento', precio: '$700',
    imagenesAdicionales: []
  },
  {
    id: '14', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 14', descripcion: 'Descripción del Item 14, mas descripcion del item 1', promocion: '70% de descuento', precio: '$750',
    imagenesAdicionales: []
  },
  {
    id: '15', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 15', descripcion: 'Descripción del Item 15, mas descripcion del item 1', promocion: '75% de descuento', precio: '$800',
    imagenesAdicionales: []
  },
  {
    id: '16', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 16', descripcion: 'Descripción del Item 16, mas descripcion del item 1', promocion: '80% de descuento', precio: '$850',
    imagenesAdicionales: []
  },
  {
    id: '17', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 17', descripcion: 'Descripción del Item 17, mas descripcion del item 1', promocion: '85% de descuento', precio: '$900',
    imagenesAdicionales: []
  },
  {
    id: '18', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 18', descripcion: 'Descripción del Item 18, mas descripcion del item 1', promocion: '90% de descuento', precio: '$950',
    imagenesAdicionales: []
  },
  {
    id: '19', imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', titulo: 'Item 19', descripcion: 'Descripción del Item 19, mas descripcion del item 1', promocion: '95% de descuento', precio: '$1000',
    imagenesAdicionales: []
  },
  {
    id: '20', imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgPs5a279hqLvtrZsFwDTS2YLM3nF1y5soxx6b9hk6beCkC8EaplTxCTaUfFfYWXk6TcILlXFQuf7wnrdrVHyfp1nmiFILfeIhy4HxN3Fu8Lz0y0vWaMpt2H44RfUj4mMaxD9T2YXeNZU/s1600/skill-0.JPG', titulo: 'Item 20', descripcion: 'Descripción del Item 20, mas descripcion del item 1', promocion: '100% de descuento', precio: '$1050',
    imagenesAdicionales: []
  },
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




function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  backgroundColor?: string;
}) {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor ?? 'transparent',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FontAwesome
        size={18}
        style={{ marginBottom: -3 }}
        name={props.name}
        color={props.color}
      />
    </View>
  );
}

export default function TabOneScreen() {

  const PAGE_SIZE = 10;
  const [visibleItems, setVisibleItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const hasMore = visibleItems.length < dataTest.length;
  const { agregarProducto } = useProducto();

  const renderItem = (item: Item, customHeight: number) => (
    <Pressable onPress={() => detalleNavegar(item.id)}>
      <View key={item.id} style={styles.card}>

        <ImageCache
          source={{ uri: item.imagen }}
          style={[styles.imageItem, { height: customHeight }]}
          cachePolicy="memory-disk" // 🔥 no vuelve a pedir la imagen
        ></ImageCache>
        <Text style={styles.itemTitle}>{item.titulo}</Text>
        <Text style={styles.itemDescription} numberOfLines={2}>{item.descripcion}</Text>
      </View></Pressable>
  );

  const detalleNavegar = (idItem: string) => {

    let productoSeleccionado: Item[] = dataTest.filter(item => item.id === idItem);
    //console.log('Producto Seleccionado:', productoSeleccionado);
    agregarProducto(productoSeleccionado[0]);
    //console.log('PS@ ',productoSeleccionado[0].imagen);
    router.push({
      pathname: '/(tabs)/detalleProducto',
    });
  };


  useEffect(() => { setVisibleItems(dataTest.slice(0, PAGE_SIZE)); }, []);

  const leftColumn = visibleItems.filter((item, i) => i % 2 === 0);
  const rightColumn = visibleItems.filter((item, i) => i % 2 !== 0);

  const handleScroll = ({ nativeEvent }: any) => {
    const paddingToBottom = 20;
    const isCloseToBottom = nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - paddingToBottom;
    if (isCloseToBottom) {
      loadMore();
    }
  };

  useFocusEffect(
    useCallback(() => {
      // cuando la tab vuelve a estar activa
      setLoading(false);
    }, [])
  );


  const loadMore = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const nextItems = dataTest.slice(
        visibleItems.length,
        visibleItems.length + PAGE_SIZE
      );

      setVisibleItems(prev => [...prev, ...nextItems]);
      setLoading(false);
    }, 500);
  };




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
                <TabBarIcon name="search" color="#ffffffff" backgroundColor="#3a3a3aff"></TabBarIcon>
              </Pressable>

            </View></>
          ),
          headerStyle: { backgroundColor: '#dbe51aff' },

        }}>

      </Stack.Screen>
      <ListaHorizontal></ListaHorizontal>
      <ImageCache
        source={{ uri: 'https://alohacamp.com/es/travels/wp-content/uploads/2024/09/montanas-de-espana-ZW.webp' }}
        style={styles.image}
        resizeMode="cover"
      ></ImageCache>

      <ScrollView
        contentContainerStyle={styles.mainScroll}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.masonryContainer}>

          {/* COLUMNA IZQUIERDA */}
          <View style={styles.column}>
            {leftColumn.map(item => renderItem(item, 200))}
          </View>

          {/* COLUMNA DERECHA */}
          <View style={styles.column}>
            {rightColumn.map(item => renderItem(item, 300))}
          </View>

        </View>

        {/* 👇 AQUÍ VA EL LOADER */}
        {loading && (<ActivityIndicator size="small" style={{ marginVertical: 20 }} />)}

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
    paddingLeft: 8,
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
  },
  btn: {
    padding: 12,
    backgroundColor: "#222",
    borderRadius: 10,
  },

});


