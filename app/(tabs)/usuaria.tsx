import { Dimensions, Image, Modal, Pressable, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const { width } = Dimensions.get('window');
const isLoggedIn = false;

/*  const isPremium = true;

  return (
    <View>
      {isPremium ? <PremiumContent /> : <FreeContent />}
    </View>
  );*/

export default function TabUsuaria() {
    return isLoggedIn ? <UsuariaLogueada></UsuariaLogueada> : <UsuariaSinLoguearse></UsuariaSinLoguearse>;
}

function UsuariaSinLoguearse() {

    const [isEnabled, setIsEnabled] = useState(false);
    const [visible, setVisible] = useState(false);



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
                        headerStyle: { backgroundColor: 'rgb(243, 244, 239)' },
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <View style={styles.contenedorImagenUsuaria} >
                                <Image
                                    source={{ uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfuxZX_36KugFB7NguuS26La_JPwSlA5yGZ431tkM1QyAeRtKancSt-dEtaOVbieUOHVAPG9iIlUOaDhBxjf036ALqOHAyF-yyOCLpsOn23U3ZsC0Vc65HtVvtIpNFTLhyiCVKsEzBSuQ/s1600/lanaya.gif" }}
                                    style={styles.imageUsuaria}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                        ),
                        headerTitle: () => <Text>Bienvenida Sin Login</Text>,
                        headerRight: () => (
                            <View style={styles.contenedorSettings} >
                                <Pressable onPress={() => router.push("/(tabs)/categoria")} style={styles.btnSettings} >
                                    <Ionicons name="settings" size={22} color={"rgb(101, 179, 203)"}></Ionicons>
                                </Pressable>
                            </View>
                        ),


                    }}>

                </Stack.Screen>



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

function UsuariaLogueada() {
        const [isEnabled, setIsEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    return (
                <>
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: 'rgb(243, 244, 239)' },
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <View style={styles.contenedorImagenUsuaria} >
                                <Image
                                    source={{ uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfuxZX_36KugFB7NguuS26La_JPwSlA5yGZ431tkM1QyAeRtKancSt-dEtaOVbieUOHVAPG9iIlUOaDhBxjf036ALqOHAyF-yyOCLpsOn23U3ZsC0Vc65HtVvtIpNFTLhyiCVKsEzBSuQ/s1600/lanaya.gif" }}
                                    style={styles.imageUsuaria}
                                    resizeMode="contain"
                                ></Image>
                            </View>
                        ),
                        headerTitle: () => <Text>Bienvenida Quinn</Text>,
                        headerRight: () => (
                            <View style={styles.contenedorSettings} >
                                <Pressable onPress={() => router.push("/(tabs)/categoria")} style={styles.btnSettings} >
                                    <Ionicons name="settings" size={22} color={"rgb(212, 212, 212)"}></Ionicons>
                                </Pressable>
                            </View>
                        ),


                    }}>

                </Stack.Screen>



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
        paddingBottom: 50,
    },

    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#d314d6ff",
    },


    headerContainer: {
        backgroundColor: 'rgb(228, 228, 228)',
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
    imageUsuaria: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
    // boton volver
    btn: {
        padding: 12,
        backgroundColor: "#222",
        borderRadius: 10,
    },

    btnSettings: {
        padding: 2,
        backgroundColor: "#adadad",
        borderRadius: 2,
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
    contenedorImagenUsuaria: {
        width: 36,
        height: 36,
        marginLeft: 10,
        padding: 2,
        borderRadius: 18,
        backgroundColor: '#000', // borde visual
    },

    contenedorSettings: {

        marginRight: 10,
        padding: 0,
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
