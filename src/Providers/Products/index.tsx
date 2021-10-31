import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

interface ProductsProviderData {
  cart: ProductData[];
  token: string;
  openModal: boolean;
  productList: ProductData[];
  modalCloseClick: (event: any) => void;
  modalOpenClick: () => void;
  addToCart: (product: ProductData) => void;
  removeFromCart: (product: ProductData) => void;
  setToCart: (data: ProductData[]) => void;
  setProducts: (item: ProductData[]) => void;
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
  id?: number;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [cart, setCart] = useState<ProductData[]>([] as ProductData[]);

  const [productList, setProductList] = useState<ProductData[]>(
    [] as ProductData[]
  );

  const [openModal, setOpenModal] = useState(false);

  const token = localStorage.getItem("token") || "";

  const setProducts = (item: ProductData[]) => {
    setProductList(item);
  };

  const addToCart = (product: ProductData) => {
    console.log(token);
    const newProduct = {
      category: product.category,
      image: product.image,
      price: product.price,
      product: product.product,
      userId: product.userId,
    };
    axios
      .post(
        "https://hamburgueria-kenzie-2-igor.herokuapp.com/cart",
        newProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(`Produto adicionado ao carrinho.`);
        setCart([...cart, response.data]);
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
    const newCart = cart.filter((prd) => prd.id !== product.id);
    setCart(newCart);
  };

  const setToCart = (data: ProductData[]) => {
    setCart(data);
  };

  const modalOpenClick = () => {
    setOpenModal(true);
  };

  const modalCloseClick = (event: any) => {
    if (event.target.id === "modalContainer") {
      setOpenModal(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        addToCart,
        cart,
        openModal,
        modalCloseClick,
        modalOpenClick,
        productList,
        setProducts,
        removeFromCart,
        setToCart,
        token,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
