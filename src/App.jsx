import "./App.css";
import Home from "./routes/Home";
import Service from "./components/Service-section/Service";
// import Daily from "./components/Daily-section/Daily";
import Menu from "./routes/Menu";
import Footer from "./components/Footer/Footer";
import CartButton from "./components/Cart/CartButton";
import CartList from "./components/Cart/CartList";
import Modal from "./components/Modal/Modal";
import { useState, useEffect } from "react";

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("cartlist")) || []
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("cartlist", JSON.stringify(productsInCart));
  }, [productsInCart]);

  /*
  The 'addProductToCart' function checks if the 'item' being added already exists in the 'productsInCart' state by searching for a product with the same id. If it finds a matching product, it updates the quantity by mapping over the productsInCart array and incrementing the count of the matching product. If the product doesn't exist in the cart, it creates a new product object with a count of 1 and adds it to the productsInCart array.

  By handling the uniqueness of products in the addProductToCart function, you ensure that only one instance of a product is present in the cart, and the quantity is properly updated when adding the same product again.
*/
  const [showModal, setShowModal] = useState(false);

  const addProductToCart = (item) => {
    const existingProduct = productsInCart.find(
      (product) => product.id === item.id
    );

    if (existingProduct) {
      setShowModal(true);
    } else {
      // Product doesn't exist in the cart, add it as a new entry
      const newProduct = {
        ...item,
        count: 1,
      };
      setProductsInCart([...productsInCart, newProduct]);
    }
  };

  const onQuantityChange = (productId, count) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal onClose={closeModal} />}
      <CartList
        visibility={cartVisibility}
        products={productsInCart}
        onClose={() => setCartVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      {windowWidth < 640 ?
      <CartButton
        onClick={() => setCartVisibility(true)}
        productCount={productsInCart.reduce(
          (total, product) => Number(total) + Number(product.count),
          0
        )}
      /> : null}
      <Home
        onClick={() => setCartVisibility(true)}
        productCount={productsInCart.reduce(
          (total, product) => Number(total) + Number(product.count),
          0
        )}
      />
      <Service />
      <Menu
        handleAddToCart={addProductToCart}
        productsInCart={productsInCart}
      />
      {/* <Daily /> */}
      <Footer />
    </>
  );
}

export default App;
