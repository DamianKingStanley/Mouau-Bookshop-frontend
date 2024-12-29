import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderList.css"; // Import CSS styles
import moment from "moment"; // Install moment.js for date formatting

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders on component load
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://ebookshop-v9a3.onrender.com/api/orders"
        );

        // Sort orders in descending order based on createdAt
        const sortedOrders = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await axios.put(
        "https://ebookshop-v9a3.onrender.com/api/orders/update-status",
        {
          orderId,
          status,
        }
      );
      alert(`Order status updated to ${status}`);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, status: response.data.order.status }
            : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // Function to group orders by date
  const groupOrdersByDate = (orders) => {
    return orders.reduce((grouped, order) => {
      const date = moment(order.createdAt).format("YYYY-MM-DD");
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(order);
      return grouped;
    }, {});
  };

  const groupedOrders = groupOrdersByDate(orders);

  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        Object.keys(groupedOrders).map((date) => (
          <div key={date} className="order-group">
            <h3 className="order-date">Orders for {date}</h3>
            <div className="order-grid">
              {groupedOrders[date].map((order) => (
                <div key={order._id} className="order-card">
                  <div className="order-id">Order ID: {order._id}</div>
                  <div className="order-items">
                    <strong>Items:</strong>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          <strong>{item.title}</strong> - {item.quantity} pcs
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-amount">
                    Total Amount: NGN {order.totalAmount}
                  </div>
                  <div className="order-status">Status: {order.status}</div>
                  <div className="order-actions">
                    <button
                      onClick={() => updateOrderStatus(order._id, "Pending")}
                    >
                      Set Pending
                    </button>
                    <button
                      onClick={() => updateOrderStatus(order._id, "Verified")}
                    >
                      Set Verified
                    </button>
                    <button
                      onClick={() =>
                        updateOrderStatus(order._id, "Not Verified")
                      }
                    >
                      Set Not Verified
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderList;
