import React, { useState } from "react";
import AdminPanel from "./AdminPanel";
import UsersComponent from "../../component/UsersComponent/UsersComponent";
import CreatePost from "../CreatePost/CreatePost";
import OrderList from "../../component/OrderList/OrderList";
import "./AdminDashboard.css";
import { FaDoorOpen, FaDoorClosed } from "react-icons/fa";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("search-book");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "search-book":
        return <AdminPanel />;
      case "users":
        return <UsersComponent />;
      case "create-posts":
        return <CreatePost />;
      case "all-orders":
        return <OrderList />;
      default:
        return <AdminPanel />;
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <button className="sidebar-toggles" onClick={toggleSidebar}>
        {sidebarOpen ? "Close" : "Open"}
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => setActiveComponent("search-book")}>Find Books</li>
          <li onClick={() => setActiveComponent("users")}>Manage Users</li>
          <li onClick={() => setActiveComponent("create-posts")}>Add Books</li>
          <li onClick={() => setActiveComponent("all-orders")}>Orders</li>
        </ul>
      </div>

      <div className="main-content">{renderComponent()}</div>
    </div>
  );
};

const SettingsComponent = () => (
  <div>
    <h3>Settings</h3>
    <p>This is the Settings component.</p>
  </div>
);

export default AdminDashboard;
