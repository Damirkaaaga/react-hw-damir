import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/authSlice";
import { auth } from "../../firebase";
import useLogger from "../../hooks/useLogger";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUserState] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Already logged in:", currentUser);
        setUserState(currentUser);
        dispatch(setUser("Damir"));
        useLogger("AutoLogin", { email: currentUser.email });
      } else {
        setUserState(null);
        dispatch(setUser(null));
      }
      setCheckingAuth(false);
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
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
      console.log("User logged in:", userCredential.user);
      alert("Login successful");
      setUserState(userCredential.user);
      dispatch(setUser("Damir"));
      useLogger("LoginSuccess", { email });
    } catch (error: unknown) {
      const err = error as { message: string };
      console.error("Login error:", err.message);
      alert("Login failed: " + err.message);
      useLogger("LoginError", { email, error: err.message });
    }
  };

  const handleLogout = () => {
    auth.signOut();
    if (user?.email) {
      useLogger("Logout", { email: user.email });
    }
    dispatch(setUser(null));
    setUserState(null);
  };

  if (checkingAuth) return null;

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
