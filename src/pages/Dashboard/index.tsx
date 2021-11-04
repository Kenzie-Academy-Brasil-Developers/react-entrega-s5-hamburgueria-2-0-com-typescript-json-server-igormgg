import axios from "axios";
import { useEffect } from "react";
import { useProducts } from "../../Providers/Products";
import { DashboardContainer } from "./styles";
import CartModal from "../../Components/CartModal";
import Header from "../../Components/Header";
import { Redirect } from "react-router";
import { useAuth } from "../../Providers/Auth";

const Dashboard = () => {
  const { addToCart, cart, searchFilter, setProducts, setToCart, token } =
    useProducts();

  const { authToken } = useAuth();

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

  if (!authToken) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <Header />
      <DashboardContainer>
        <CartModal />
        <ul id="productListContainer">
          {searchFilter.length !== 0 ? (
            searchFilter.map((item, index) => (
              <li key={index} tabIndex={0}>
                <div id="imgDiv">
                  <img src={item.image} alt={item.product} />
                </div>
                <div id="ProductDescriptionDiv">
                  <h1>{item.product}</h1>
                  <h2>{item.category}</h2>
                  <h3>R$ {item.price}.00</h3>
                  <button onClick={() => addToCart(item)}>Adicionar</button>
                </div>
              </li>
            ))
          ) : (
            <h5>Não há produtos correspondentes com sua pesquisa</h5>
          )}
        </ul>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
