import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../firebase.ts";
import useLogger from "../../hooks/useLogger.ts";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Already logged in:", currentUser);
        setUser(currentUser);
        useLogger("AutoLogin", { email: currentUser.email });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      alert("Login successful");
      setUser(userCredential.user);
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
    if (user) {
      useLogger("Logout", { email: user.email });
    }
    setUser(null);
  };

  return (
    <div className="login-wrapper">
      <div className="background-angle"></div>
      <h1 className="login-title">Log in</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default LoginPage;
