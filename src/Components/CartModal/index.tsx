import { ModalContainer } from "./styles";
import { useProducts } from "../../Providers/Products";

const CartModal = () => {
  const { cart, modalCloseClick, openModal, removeFromCart } = useProducts();

  return (
    <>
      {openModal && (
        <ModalContainer onClick={modalCloseClick} id="modalContainer">
          {cart.length === 0 ? (
            <div id="modalDiv">
              <h1>Não há produtos no carrinho</h1>
            </div>
          ) : (
            <div id="modalDiv">
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.product} />
                    <h1>{item.product}</h1>
                    <div>
                      <button>-</button>
                      <h2>counter</h2>
                      <button>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item)}>
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ModalContainer>
      )}
    </>
  );
};

export default CartModal;
