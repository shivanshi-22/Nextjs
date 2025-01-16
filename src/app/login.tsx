"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRootStore } from "@/services/root-store/root-store-context";

const Login = () => {
  const { authStore } = useRootStore(); // Access the authStore
  const router = useRouter(); // Next.js router for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Simulate login (you can replace this with your actual login logic)
      const success = await authStore.login(email, password);
      if (success) {
        router.push("/"); // Redirect to the home page on successful login
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred during login.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
