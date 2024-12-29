import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import LogIn from "./pages/LogIn/LogIn";
import CreatePost from "./pages/CreatePost/CreatePost";
import CartComponent from "./pages/CartComponent/Cartcomponent";
import BooksPage from "./pages/BooksPage/BooksPage";
import ForgetPassword from "./pages/PasswordReset/ForgetPassword";
import ResetPassword from "./pages/PasswordReset/ResetPassword";
import AdminEnter from "./pages/AdminPanel/AdminEnter";
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopHeader from "./component/TopHeader/TopHeader";
import Navbar from "./component/Navbar/Navbar";
import Navibar from "./component/Navibar/Navibar";
import Footer from "./component/Footer/Footer";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <TopHeader />
        <Navbar />
        <Navibar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<SignIn />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/upload-book" element={<CreatePost />} />
          <Route exact path="/cart" element={<CartComponent />} />
          <Route exact path="/:category/:type" element={<BooksPage />} />
          <Route exact path="/admin/option" element={<AdminEnter />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/forgot-password" element={<ForgetPassword />} />
          <Route
            exact
            path="/reset-password/:token"
            element={<ResetPassword />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
