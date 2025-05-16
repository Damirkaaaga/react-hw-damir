import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import useLogger from "../../hooks/useLogger";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

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

  const handleLogin = async (e) => {
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
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
      useLogger("LoginError", { email, error: error.message });
    }
  };

  const handleLogout = () => {
    auth.signOut();
    useLogger("Logout", { email: user.email });
  };

  return (
    <div className="login-wrapper">
      {/* Добавляем угол СЛЕВА ВНИЗ */}
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
