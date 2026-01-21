import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import { Stack, useFocusEffect } from 'expo-router';
import { useCallback, useRef, useState } from 'react';
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

type Props = {
    imagenes: string[];
};

function SliderImagenes({ imagenes }: Props) {
    const [index, setIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    return (
        <View style={styles.sliderContainer}>
            <FlatList
                ref={flatListRef}
                data={imagenes}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}

                // 🔥 MUY IMPORTANTE
                snapToInterval={width}
                decelerationRate="normal"

                keyExtractor={(_, i) => i.toString()}

                renderItem={({ item }) => (
                    // 🔥 CONTENEDOR CON ANCHO EXACTO
                    <View style={{ width: width, alignItems: 'center' }}>
                        <ImageCache
                            source={{ uri: item }}
                            style={styles.image}
                            contentFit="contain"
                        />
                    </View>
                )}

                onScroll={(e) => {
                    const newIndex = Math.round(
                        e.nativeEvent.contentOffset.x / width
                    );
                    setIndex(newIndex);
                    console.log('Index actual:', newIndex);
                }}
                scrollEventThrottle={16}

            />

            {/* DOTS */}
            <View style={styles.dotsContainer}>
                {imagenes.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            i === index && styles.activeDot
                        ]}
                    />
                ))}
            </View>
        </View>
    );

}



export default function detalleProducto() {

    const { productos } = useProducto();
    const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null);
    // Si hay productos, puedes mostrar el primero o gestionar selección
    const productoMostrar: Item = productoSeleccionado || (productos.length > 0 ? productos[0] : null);
    if (!productoMostrar) return null;

    const productoImagenes: string[] = [productoMostrar.imagen];
    productoImagenes.push(...productoMostrar.imagenesAdicionales.map((img: ImagenDetalle) => img.ruta));
    console.log('Imagenes:', productoImagenes);

    // ✅ SOLUCIÓN: Resetear estado cuando la pantalla recibe foco
    useFocusEffect(
        useCallback(() => {
            // Cuando la pantalla recibe foco, actualiza con el último producto
            if (productos.length > 0) {
                // Opción 1: Siempre mostrar el último producto agregado
                setProductoSeleccionado(productos[productos.length - 1]);

                // Opción 2: Mantener el primer producto si no hay selección previa
                // if (!productoSeleccionado) {
                //     setProductoSeleccionado(productos[0]);
                // }
            } else {
                setProductoSeleccionado(null);
            }

            // Cleanup opcional
            return () => {
                // Puedes limpiar algo si es necesario
            };
        }, [productos]) // Se ejecuta cuando 'productos' cambia
    );

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
            <SliderImagenes imagenes={productoImagenes} />







        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", // 👈 columnas
    },

    contenedorImagenUsuaria: {
        width: 56,
        height: 56,
        marginLeft: 10,
        padding: 2,
        borderRadius: 36,
        backgroundColor: '#000', // borde visual
    },
    imageUsuaria: {
        width: '100%',
        height: '100%',
        borderRadius: 36,
    },

    sliderContainer: {
        position: 'relative',   // 👈 muy importante
    },

    image: {
        width: width,
        height: 250,
        resizeMode: 'contain',
    },

    dotsContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)', // fondo suave
        paddingVertical: 4,
        borderRadius: 12,
    },


    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.5)', // blanco semi transparente
        marginHorizontal: 4,
    },

    activeDot: {
        backgroundColor: '#fff',
        width: 10,
        height: 10,
    },

});