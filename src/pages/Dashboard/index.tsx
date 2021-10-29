import axios from "axios";
import { useEffect, useState } from "react";
import { useProducts } from "../../Providers/Products";
import { DashboardContainer } from "./styles";

interface ProductData {
  userId: number;
  product: string;
  category: string;
  price: number;
  image: string;
  id: number;
}

const Dashboard = () => {
  const [productList, setProductList] = useState<ProductData[]>(
    [] as ProductData[]
  );

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-2-igor.herokuapp.com/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { addToCart } = useProducts();

  return (
    <DashboardContainer>
      <ul>
        {productList.map((item, index) => (
          <li key={index}>
            {/* <img src={item.image} alt={item.product} /> */}
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
