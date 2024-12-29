import React, { useState, useEffect } from "react";
import "./Cartcomponent.css";
import axios from "axios";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [transactionReceipt, setTransactionReceipt] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [bankName, setBankName] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  const handleQuantityChange = (index, quantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const handleCheckout = async () => {
    setShowModal(true);

    const checkoutData = {
      items: cartItems,
      totalAmount,
    };

    try {
      const response = await fetch(
        "https://ebookshop-v9a3.onrender.com/api/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(checkoutData),
        }
      );

      if (response.ok) {
        console.log("Checkout successful");
      } else {
        console.error("Checkout failed");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleScreenshot = () => {
    window.print();
  };

  const handleCancel = () => {
    setShowModal(false);
    setShowBankDetails(false);
  };

  const handleTransferOption = () => {
    setShowBankDetails(true);
  };

  const handleReceiptImage = (event) => {
    const file = event.target.files[0];
    if (file && ["image/jpeg", "image/png"].includes(file.type)) {
      const img = new Image();
      img.onload = () => {
        setTransactionReceipt(file);
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleProofOfPayment = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("transactionReceipt", transactionReceipt);
    formData.append("transactionId", transactionId);
    formData.append("bankName", bankName);

    try {
      const response = await axios.post(
        "https://ebookshop-v9a3.onrender.com/pay/confirm",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert(
          "Proof of payment submitted. We will verify your payment shortly."
        );
      } else {
        console.error("Payment submission failed");
      }
    } catch (error) {
      console.error("Error submitting payment proof:", error);
    }
  };

  return (
    <div className="cart-component">
      <section className="cartBody">
        <h1>Your Cart</h1>
        <div id="receipt" className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img
                  src={`https://ebookshop-v9a3.onrender.com/${item.bookcover}`}
                  alt={item.title}
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>Author: {item.author}</p>
                  <p>Price: NGN{item.price}</p>
                  <p>Quantity:</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    min="1"
                  />
                  <p>Amount: NGN{item.price * item.quantity}</p>
                  <button
                    id="removebtn"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="cart-total">
          <h2>Total: {totalAmount}</h2>
        </div>
        <div className="cart-actions">
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={handleScreenshot}>Screenshot Receipt</button>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      </section>

      {/* Payment Modal */}
      {showModal && (
        <div className="CartComponentmodal">
          <div className="CartComponentmodal-content">
            {!showBankDetails ? (
              <>
                <h3>Choose Payment Option</h3>
                <button onClick={() => alert("Card payment selected")}>
                  Card
                </button>
                <button onClick={handleTransferOption}>Transfer</button>
                <button id="cancelpaymentbtn" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3>Bank Transfer Details</h3>
                <p>Bank: XYZ Bank</p>
                <p>Account Name: ABC Books</p>
                <p>Account Number: 1234567890</p>
                <h3>Submit Proof of Payment</h3>
                <form
                  className="ConfirmRecieptForm"
                  onSubmit={handleProofOfPayment}
                >
                  <label>
                    Transaction ID:
                    <input
                      type="text"
                      name="transactionId"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Bank Name:
                    <input
                      type="text"
                      name="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      required
                    />
                  </label>
                  <br />
                  <label>
                    Upload Receipt:
                    <input
                      type="file"
                      name="receipt"
                      accept="image/*,application/pdf"
                      onChange={handleReceiptImage}
                      required
                    />
                  </label>
                  <br />
                  <button type="submit">Submit Proof of Payment</button>
                </form>
                <button onClick={handleCancel}>Done</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
