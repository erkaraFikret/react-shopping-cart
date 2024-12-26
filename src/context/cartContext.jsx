import { createContext, useState, useContext } from 'react';
import { allProducts } from '../assets/data'; // Dışa aktarılan veri

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);

    const setItems = () => {
        setAllItems(allProducts);
    };

    return (
        <CartContext.Provider value={{ allItems, setItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};