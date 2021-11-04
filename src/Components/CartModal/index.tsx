import { ModalContainer } from "./styles";
import { useProducts } from "../../Providers/Products";
import { AiOutlineClose } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

// interface finalPriceData {
//   finalPrice: () => Number
// }

const CartModal = () => {
  const {
    cart,
    clearCart,
    modalClose,
    modalCloseClick,
    openModal,
    removeFromCart,
  } = useProducts();

  return (
    <>
      {openModal && (
        <ModalContainer onClick={modalCloseClick} id="modalContainer">
          {cart.length === 0 ? (
            <div id="emptyModalDiv">
              <div id="cartHeader">
                <h1>Carrinho de compras</h1>
                <AiOutlineClose onClick={modalClose} />
              </div>
              <div id="emptyCartBody">
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
              </div>
            </div>
          ) : (
            <div id="modalDiv">
              <div id="cartHeader">
                <h1>Carrinho de compras</h1>
                <AiOutlineClose onClick={modalClose} />
              </div>
              <ul id="cartList">
                {cart.map((item, index) => (
                  <li key={index}>
                    <div id="cartImgDiv">
                      <img src={item.image} alt={item.product} />
                    </div>
                    <div id="productstatus">
                      <h1>{item.product}</h1>
                      <div id="productCounter">
                        <button>-</button>
                        <h2>{item.quantity}</h2>
                        <button>+</button>
                      </div>
                    </div>
                    <FaTrash onClick={() => removeFromCart(item)} />
                  </li>
                ))}
              </ul>
              <div id="cartSummary">
                <div id="cartTotal">
                  <h2>Total</h2>
                  <span>
                    R${" "}
                    {cart.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                    ,00
                  </span>
                </div>
                <button onClick={clearCart}>Remover todos</button>
              </div>
            </div>
          )}
        </ModalContainer>
      )}
    </>
  );
};

export default CartModal;
