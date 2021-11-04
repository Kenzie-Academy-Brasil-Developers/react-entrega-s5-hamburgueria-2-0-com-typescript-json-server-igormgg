import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

interface ProductsProviderData {
  cart: ProductData[];
  openModal: boolean;
  productList: ProductData[];
  searchFilter: ProductData[];
  searchInput: string;
  token: string;
  addToCart: (product: ProductData) => void;
  modalClose: () => void;
  modalCloseClick: (event: any) => void;
  modalOpenClick: () => void;
  removeFromCart: (product: ProductData) => void;
  removeOneFromCart: (product: ProductData) => void;
  clearCart: () => void;
  setToCart: (data: ProductData[]) => void;
  setProducts: (item: ProductData[]) => void;
  writeSearchInput: (str: string) => void;
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
  quantity: number;
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

  const [searchInput, setSearchInput] = useState("");

  const token = localStorage.getItem("token") || "";

  const setProducts = (item: ProductData[]) => {
    setProductList(item);
  };

  const removeOneFromCart = (product: ProductData) => {
    axios
      .patch(
        `https://hamburgueria-kenzie-2-igor.herokuapp.com/cart/${product.id}`,
        { quantity: product.quantity - 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        toast.success(`Um ${product.product} foi removido do carrinho.`)
      );
  };

  const addToCart = (product: ProductData) => {
    const newProduct = {
      product: product.product,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      userId: product.userId,
    };
    const findProduct = cart.find(
      (item) => item.product === newProduct.product
    );
    findProduct
      ? axios
          .patch(
            `https://hamburgueria-kenzie-2-igor.herokuapp.com/cart/${findProduct.id}`,
            { quantity: findProduct.quantity + 1 },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() =>
            toast.success(
              `Mais um ${findProduct.product} adicionado ao carrinho.`
            )
          )
      : axios
          .post(
            "https://hamburgueria-kenzie-2-igor.herokuapp.com/cart",
            newProduct,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            toast.success(`${newProduct.product} adicionado ao carrinho.`);
          })
          .catch(() =>
            toast.error("O produto não foi adicionado ao carrinho.")
          );
  };

  const removeFromCart = (product: ProductData) => {
    axios
      .delete(
        `https://hamburgueria-kenzie-2-igor.herokuapp.com/cart/${product.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        toast.success(`Removido ${product.product} por completo do carrinho.`)
      );
  };

  const clearCart = () => {
    for (let i = 1; i <= 8; i++) {
      axios.delete(
        `https://hamburgueria-kenzie-2-igor.herokuapp.com/cart/${i}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
    toast.success(`Todos os produtos foram removidos do carrinho.`);
  };

  const searchFilter = productList.filter(
    (element) =>
      element.product.toLowerCase().includes(searchInput) ||
      element.category.toLowerCase().includes(searchInput)
  );

  const writeSearchInput = (str: string) => {
    setSearchInput(str);
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

  const modalClose = () => {
    setOpenModal(false);
  };

  return (
    <ProductsContext.Provider
      value={{
        addToCart,
        cart,
        clearCart,
        modalClose,
        modalCloseClick,
        modalOpenClick,
        openModal,
        productList,
        searchInput,
        setProducts,
        searchFilter,
        removeFromCart,
        removeOneFromCart,
        setToCart,
        token,
        writeSearchInput,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
