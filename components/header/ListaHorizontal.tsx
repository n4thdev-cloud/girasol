import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const data = ['Todo', 'Noticias', 'Deportes', 'Tecnología', 'Salud', 'Ciencia'];

export default function ListaHorizontal() {
  const [selected, setSelected] = useState<string>('Todo');
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isActive = item === selected;


          return (
            <Pressable onPress={() => setSelected(item)} style={styles.item}>
              <Text style={[styles.text, isActive && styles.activeText,]}>
                {item}
              </Text>
              {isActive && <View style={styles.underline} ></View>}
            </Pressable>
          );
        }}
      >
      </FlatList>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    width: '100%', // ocupa todo el ancho del dispositivo
    paddingVertical: 6,
  },
  list: {
    paddingHorizontal: 12,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: 'transparent',
  },
  item: {
    alignItems: 'center',
    marginRight: 16,
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  activeText: {
    color: '#000',
    fontWeight: '600',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 2,
  },
});
