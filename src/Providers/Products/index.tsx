import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

interface ProductsProviderData {
  cart: ProductData[];
  token: string;
  addToCart: (product: ProductData) => void;
  removeFromCart: (product: ProductData) => void;
}

interface ProductsProps {
  children: ReactNode;
}

interface ProductData {
  userId: number;
  product: string;
  category: string;
  price: number;
  image: string;
  id: number;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [cart, setCart] = useState<ProductData[]>([] as ProductData[]);

  const token = localStorage.getItem("token") || "";

  const addToCart = (product: ProductData) => {
    axios
      .post("https://hamburgueria-kenzie-2-igor.herokuapp.com/cart", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success(`Produto adicionado ao carrinho.`);
        console.log(response);
        // setCart([...cart, response.data])
      })
      .catch(() => toast.error("O produto não foi adicionado ao carrinho."));
  };

  const removeFromCart = (product: ProductData) => {
    axios.delete(
      `https://hamburgueria-kenzie-2-igor.herokuapp.com/cart/${product.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <ProductsContext.Provider
      value={{ addToCart, cart, removeFromCart, token }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
