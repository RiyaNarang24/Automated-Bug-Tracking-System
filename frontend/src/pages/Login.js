import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleLogin = async () => {
try {

const res = await axios.post("http://localhost:5000/api/auth/login", {
email,
password
});

// Save user
localStorage.setItem("user", JSON.stringify(res.data));

alert("Login Successful");

navigate("/dashboard");

} catch (error) {
alert("Login Failed");
}
};

return (
<div className="auth-container">

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e) => setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e) => setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

<p>Don't have account?</p>

<a href="/register">Register Here</a>

</div>
);
}

export default Login;