import { Dimensions, FlatList, Image, Modal, Pressable, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const { width } = Dimensions.get('window');

export default function TabCarrito() {

    const [isEnabled, setIsEnabled] = useState(false);
    const [visible, setVisible] = useState(false);


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
        { id: "16", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 16" },
        { id: "17", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 17" },
        { id: "18", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 18" },
        { id: "19", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 19" },
        { id: "20", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 20" },
        { id: "21", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 21" },
        { id: "22", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 22" },
        { id: "23", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 23" },
        { id: "24", imagen: 'https://ss523.liverpool.com.mx/xl/1139442781.jpg', categoria: "Item 24" },
        { id: "25", imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhemaKhgBMBUxW6WP7DcWkufmyT3CwQu3a_Jyl0WSZw_f6uyBw8YxncjTxust9kZzrkakUdqq1U5OEFRGFcw7vZWtOLtTZbcvwoMnY9_0anBmubcuUYBrCigJUrmxnSIfgD02DsSuk9eW0/s1600-rw/Enchantress.JPG', categoria: "Item 25" },
    ];

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

    return (
        <>
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: '#dbe51aff' },
                        headerTitle: '',
                        headerLeft: () => (
                            <><View style={styles.headerContainer}>
                                <Pressable style={styles.btn} onPress={() => router.push("/(tabs)/categoria")}>
                                    <TabBarIcon name="arrow-left" color="#ffffffff" backgroundColor="#3a3a3aff"></TabBarIcon>
                                </Pressable>

                                <Pressable style={styles.btnCheck} onPress={() => setIsEnabled(prev => !prev)}>
                                    <Ionicons
                                        name="checkmark"
                                        size={22}
                                        color={isEnabled ? "#2ecc71" : "#cd0e0eff"}
                                    />
                                </Pressable>
                                <Text>Carrito [333]</Text>


                            </View></>
                        ),


                    }}>

                </Stack.Screen>


                <FlatList
                    data={dataCatalogo}
                    keyExtractor={(item) => item.id}
                    style={styles.lista}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                    }}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image
                                source={{ uri: item.imagen }}
                                style={styles.imageItemMasVendido}
                                resizeMode="cover"
                            />
                            {/* Texto derecha */}
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.categoria}</Text>
                                <Text style={styles.subtitle}>Descripción del producto</Text>
                                <Text style={styles.price}>$19.99</Text>
                            </View>
                        </View>
                    )}

                ></FlatList>
                <View style={styles.fixed}>
                    <Text style={styles.text}>$1.34</Text>

                    <Pressable style={styles.button} onPress={() => setVisible(true)}>
                        <Text style={styles.buttonText}>Comprar: contacto vendedxr</Text>
                    </Pressable>
                </View>

                {/* Modal */}
                <Modal visible={visible} transparent animationType="slide">
                    <View style={styles.modalBackdrop}>
                        <View style={styles.modalContent}>
                            <Text>Mi numero de contacto: 0938355677 👋</Text>

                            <Pressable onPress={() => setVisible(false)}>
                                <Text style={{ marginTop: 20, color: 'blue' }}>Cerrar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>


            </View >

        </>
    );
}

const guardarCambios = () => {
    console.log("check");

};

const styles = StyleSheet.create({
    lista: {
        width: "100%",
        backgroundColor: "#f2f2f2",
    },

    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#d314d6ff",
    },


    headerContainer: {
        backgroundColor: '#b61bd5ff',
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
   
    input: {
        flex: 1,          // 🔥 ocupa todo el espacio disponible
        height: '100%',
        paddingHorizontal: 10,
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
    leftItem: {
        paddingHorizontal: 6,
        paddingTop: 6
    },
    imageItemMasVendido: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    // boton volver
    btn: {
        padding: 12,
        backgroundColor: "#222",
        borderRadius: 10,
    },

    btnCheck: {
        padding: 12,
        backgroundColor: "#222",
        borderRadius: 10,
    },
    item: {
        flexDirection: "row",     // 🔑 pone imagen + texto en fila
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 10,
        marginBottom: 12,
        alignItems: "center",
    },

    image: {
        width: 90,
        height: 110,
        borderRadius: 10,
    },

    textContainer: {
        flex: 1,                  // 🔑 ocupa todo el espacio restante
        marginLeft: 12,
    },

    title: {
        fontSize: 14,
        fontWeight: "600",
    },

    subtitle: {
        fontSize: 12,
        color: "#666",
        marginTop: 4,
    },

    price: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 6,
    },
    container: {
        flex: 1,
    },
    fixed: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        paddingHorizontal: 16,

        flexDirection: 'row',          // 👈 clave
        alignItems: 'center',          // centra vertical
        justifyContent: 'space-between', // izquierda / derecha

        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    text: {
        fontSize: 16,
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#007AFF',
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },


});
