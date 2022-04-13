import axios from "axios";
import create from "zustand";
import { ProductsDataType } from "../../types/ProductsDataType";

const BASE = "http://localhost:3001";

export const useProducts = create<ProductsDataType>((set) => ({
    products: [],
    setProducts: async () => {
    const response = await axios.get(`${BASE}/products`);
    set(() => ({ products: response.data }));
    },
}));  