import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import PaymentInfo from "../components/PaymentInfo";
import AdditionalInfo from "../components/AdditionalInfo";
import YourOrder from "../components/YourOrder";
import PaymentMethod from "../components/PaymentMethod";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkAsTeacher.css";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cartItems.length === 0) return;
    setTotalPrice(
      Math.floor(cartItems.reduce((acc, item) => acc + item.price, 0))
    );
  }, [cartItems]);
  useEffect(() => {
    async function cart() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setCartItems(data);
    }
    cart();
  }, []);

  function handleDeleteItem(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the resource.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Resource deleted successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="container d-flex cart">
      <CartItems
        cartItems={cartItems}
        totalPrice={totalPrice}
        onDelete={handleDeleteItem}
      />
      <PaymentInfo />
      <AdditionalInfo />
      <YourOrder cartItems={cartItems} totalPrice={totalPrice} />
      <PaymentMethod />
    </div>
  );
}
