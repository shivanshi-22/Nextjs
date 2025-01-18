"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRootStore } from "@/services/root-store/root-store-context";

const Login: React.FC = () => {
  const { authStore } = useRootStore();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const success = await authStore.login(email, password);
      if (success) {
        router.push("/"); // Redirect to home
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
