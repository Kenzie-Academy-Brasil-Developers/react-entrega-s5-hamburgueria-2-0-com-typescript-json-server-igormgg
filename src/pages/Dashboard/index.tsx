import axios from "axios";
import { useEffect } from "react";
import { useProducts } from "../../Providers/Products";
import { DashboardContainer } from "./styles";
import CartModal from "../../Components/CartModal";
import Header from "../../Components/Header";

// interface ProductData {
//   userId: number;
//   product: string;
//   category: string;
//   price: number;
//   image: string;
//   id: number;
// }

// interface setProductsData {
//   setProducts: (item: ProductData[]) => void
// }

const Dashboard = () => {
  // const [productList, setProductList] = useState<ProductData[]>(
  //   [] as ProductData[]
  // );

  const {
    addToCart,
    cart,
    modalOpenClick,
    productList,
    setProducts,
    setToCart,
    token,
  } = useProducts();

  // const setProducts = (item: ProductData[]) => {
  //   setProductList(item);
  // };

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-2-igor.herokuapp.com/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setToCart(response.data);
      })
      .catch((err) => console.log(err));
  }, [cart]);

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-2-igor.herokuapp.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DashboardContainer>
      <CartModal />
      <Header />
      <button onClick={modalOpenClick}>Carrinho</button>
      <ul>
        {productList.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.product} />
            <h1>{item.product}</h1>
            <h2>{item.category}</h2>
            <h3>{item.price}</h3>
            <button onClick={() => addToCart(item)}>Adicionar</button>
          </li>
        ))}
      </ul>
    </DashboardContainer>
  );
};

export default Dashboard;
