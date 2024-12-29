import React, { useState } from "react";
import "./AdminRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [role, setRole] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const submitForm = async () => {
    try {
      setLoading(true);
      if (password === confirmPassword) {
        const response = await fetch(
          "https://ebookshop-v9a3.onrender.com/user/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullname,
              username,
              email,
              phone,
              password,
              role,
              secretKey,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          setRegisterMessage("Registered successfully");
          setLoading(false);

          navigate("/admin/option");
        } else {
          const errorResponseData = await response.json();
          setRegisterMessage(
            errorResponseData.message || "Registration failed. Try again later."
          );
          setLoading(false);
        }
      } else {
        setPasswordMatch(false);
      }
    } catch (error) {
      setRegisterMessage("Registration failed. Try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="AdminSignInbody">
      <section className="register">
        {registerMessage && (
          <div
            className={
              registerMessage === "Registered successfully. Please Log In Now"
                ? "success-message"
                : "error-message"
            }
          >
            {registerMessage}
          </div>
        )}
        <h3> Admin Sign Up </h3>
        <br />
        <div id="registerform">
          <div>
            <input
              type="text"
              name="fullname"
              id="FullName"
              placeholder="Enter your full name"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="username"
              id="Username"
              placeholder="Enter your Registration number"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
              type="email"
              name="email"
              id="emailAddress"
              placeholder="Enter valid email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="phone"
              id="phoneNumber"
              placeholder="Enter phone number"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handlePasswordChange}
              />
              <i
                className="password-toggle1"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </i>
            </div>

            <div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="password"
                placeholder="Confirm Password"
                required
                onChange={handleConfirmPasswordChange}
              />
              <i
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </i>
            </div>

            <div id="passwordmatchAlert">
              {!passwordMatch && (
                <p>Passwords do not match. Please try again.</p>
              )}
            </div>
            <select
              name="role"
              id="Adminrole"
              required
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Role</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
            <br />
            {(role === "admin" || role === "staff") && (
              <input
                type="text"
                name="secretKey"
                id="secretKey"
                placeholder={`Enter ${
                  role === "admin" ? "Admin" : "Staff"
                } Secret Key`}
                required
                onChange={(e) => setSecretKey(e.target.value)}
              />
            )}
            <br />
            <button onClick={submitForm} id="submitbtn" disabled={loading}>
              {loading ? <div className="button-loader"></div> : "Sign Up"}
            </button>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
};

export default SignIn;
