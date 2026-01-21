import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ImagenDetalle {
  id: string;
  ruta: string;
}

interface Producto {
  id: string;
  imagen: string;
  titulo: string;
  descripcion: string;
  promocion: string;
  precio: string;
  imagenesAdicionales: ImagenDetalle[];
}

interface ProductoContextType {
  productos: Producto[];
  agregarProducto: (producto: Producto) => void;
  eliminarProducto: (id: string) => void;
  limpiarProductos: () => void;
}

// Crea el contexto
const ProductoContext = createContext<ProductoContextType | undefined>(undefined);

// Hook personalizado
export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context) {
    throw new Error('useProducto debe usarse dentro de ProductoProvider');
  }
  return context;
};

// Provider
interface ProductoProviderProps {
  children: ReactNode;
}

export const ProductoProvider: React.FC<ProductoProviderProps> = ({ children }) => {
  const [productos, setProductos] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setProductos(prev => [...prev, producto]);
  };

  const eliminarProducto = (id: string) => {
    setProductos(prev => prev.filter(p => p.id !== id));
  };

  const limpiarProductos = () => {
    setProductos([]);
  };

  return (
    <ProductoContext.Provider 
      value={{ 
        productos, 
        agregarProducto, 
        eliminarProducto, 
        limpiarProductos 
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};