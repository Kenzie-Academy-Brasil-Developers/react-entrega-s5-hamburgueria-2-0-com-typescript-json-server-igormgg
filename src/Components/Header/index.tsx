import { HeaderContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useProducts } from "../../Providers/Products";
import { useAuth } from "../../Providers/Auth";

const Header = () => {
  // const [inputText, setInputText] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const {
    modalOpenClick,
    searchInput,
    writeSearchInput,
    // setProducts,
    // productList,
  } = useProducts();

  const { Signout } = useAuth();

  // const filter = productList.filter(
  //   (element) =>
  //     element.product.toLowerCase().includes(inputText) ||
  //     element.category.toLowerCase().includes(inputText)
  // );

  // const handleSearchClick = () => {
  //   setProducts(filter);
  // };

  // const handleSearchClick = () => {
  //   console.log("Reestruturar");
  // };

  return (
    <HeaderContainer>
      {!showSearch && (
        <div id="noSearchDivMobile">
          <div id="logo">
            <img
              src="https://i.ibb.co/ct7G91Q/burguer-logo.png"
              alt="Burguer Logo"
            />
          </div>
          <div id="endBox">
            <div id="searchBox">
              <input
                // value={inputText}
                value={searchInput}
                // onChange={(e) => setInputText(e.target.value)}
                onChange={(e) => writeSearchInput(e.target.value)}
                type="text"
                placeholder="Digitar Pesquisa"
              />
              <div id="searchIconDiv">
                <BiSearch />
              </div>
            </div>
            <BiSearch id="searchMobile" onClick={() => setShowSearch(true)} />
            <FaShoppingCart id="cartSVG" onClick={modalOpenClick} />
            <FiLogOut id="logoutSVG" onClick={Signout} />
          </div>
        </div>
      )}
      {showSearch && (
        <div id="mobileSearchBox">
          <input
            value={searchInput}
            onChange={(e) => writeSearchInput(e.target.value)}
            type="text"
            placeholder="Digitar Pesquisa"
          />
          <div id="searchIconDiv" onClick={() => setShowSearch(false)}>
            <BiSearch />
          </div>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
