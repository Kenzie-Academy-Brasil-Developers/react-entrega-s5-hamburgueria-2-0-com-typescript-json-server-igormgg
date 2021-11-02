import { HeaderContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useProducts } from "../../Providers/Products";

// interface ProductData {
//   userId: number;
//   product: string;
//   category: string;
//   price: number;
//   image: string;
//   id: number;
// }

const Header = () => {
  const [inputText, setInputText] = useState("");

  const { setProducts, productList } = useProducts();

  const filter = productList.filter(
    (element) =>
      element.product.toLowerCase().includes(inputText) ||
      element.category.toLowerCase().includes(inputText)
  );

  const handleSearchClick = () => {
    setProducts(filter);
  };

  return (
    <HeaderContainer>
      <div id="logo">
        <h1>Burguer</h1>
        <span>Kenzie</span>
      </div>
      <div id="endBox">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Digitar Pesquisa"
        />
        <div id="searchIconDiv">
          <BiSearch onClick={handleSearchClick} />
        </div>
        <FaShoppingCart />
        <FiLogOut />
      </div>
    </HeaderContainer>
  );
};

export default Header;
