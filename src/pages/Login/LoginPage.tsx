import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import useLogger from "../../hooks/useLogger";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        useLogger("AutoLogin", { email: currentUser.email });
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      alert("Enter correct email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      alert("Login successful");
      useLogger("LoginSuccess", { email });
    } catch (error: unknown) {
      const err = error as { message: string };
      console.error("Login error:", err.message);
      alert("Login failed: " + err.message);
      useLogger("LoginError", { email, error: err.message });
    }
  };

  if (!loading && user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-wrapper">
      <div className="background-angle"></div>
      <h1 className="login-title">Log in</h1>
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>User name</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setEmail("");
                setPassword("");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
