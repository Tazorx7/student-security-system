"use client";

import { useState } from "react";
import { auth } from "../lib/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Waiting for login...");

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("Testing connection...");
    try {
      // This will attempt to talk to your Cloud Project
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setStatus(`Success! Logged in as: ${userCredential.user.email}`);
    } catch (error) {
      // This will tell us if the API keys or Firewall are still blocked
      setStatus(`Connection Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>School Security Login Test</h1>
      <p>Status: <strong>{status}</strong></p>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Staff Email" 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <button type="submit">Test Firebase Connection</button>
      </form>
    </div>
  );
}
