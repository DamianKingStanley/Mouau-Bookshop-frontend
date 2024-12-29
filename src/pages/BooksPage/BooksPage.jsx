import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BooksPage.css";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { category, type } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      let url = `https://ebookshop-v9a3.onrender.com/post/${category}?type=${type}`;

      try {
        const response = await axios.get(url);

        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [category, type]);

  const addToCart = (post) => {
    const isLoggedIn = sessionStorage.getItem("user");

    if (!isLoggedIn) {
      setModalMessage("You must log in first");
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000); // Hide after 3 seconds
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(post);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    setModalMessage(`${post.title} has been added to your cart!`);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000); // Hide after 3 seconds
  };

  return (
    <div>
      <div className="BooksPageComponent">
        <h1>Books for {type.replace("-", " ")}</h1>
        <div className="BooksPageComponentbooks-list">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index} className="book-item">
                <img
                  src={`https://ebookshop-v9a3.onrender.com/${book.bookcover}`}
                  alt={book.title}
                />
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.price}</p>
                <button
                  className="BooksPageadd-to-cart-button"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No books yet.</p>
          )}
        </div>

        {showModal && (
          <div className="BooksPagemodal">
            <p>{modalMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
