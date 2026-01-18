import { useState } from "react";

const GROUP_USER = "admin";
const GROUP_PASS = "admin@123";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (username === GROUP_USER && password === GROUP_PASS && name) {
      onLogin(name);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Group Login</h2>

      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <input placeholder="Your Name / ID" onChange={e => setName(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
