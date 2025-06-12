import React, { useState, useEffect, FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebase.ts";
import useLogger from "../../hooks/useLogger.ts";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        useLogger("AutoLogin", { email: currentUser.email });
      } else {
        setUser(null);
      }
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.includes("@") || password.length < 6) {
      alert("Please enter a valid email and password (min 6 characters)");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      useLogger("LoginSuccess", { email });
      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
      useLogger("LoginError", { email, error: error.message });
    }
  };

  const handleLogout = () => {
    auth.signOut();
    if (user?.email) {
      useLogger("Logout", { email: user.email });
    }
  };

  if (checkingAuth) return null;
  if (user) return <Navigate to="/" replace />;

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
