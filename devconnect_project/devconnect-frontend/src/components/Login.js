import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto">
      <input type="email" placeholder="Email" className="p-2 border w-full mb-2"
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="p-2 border w-full mb-2"
        onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
    </form>
  );
};

export default Login;