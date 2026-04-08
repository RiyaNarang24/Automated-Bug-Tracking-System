import { useState } from "react";
import axios from "axios";

function Register() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("Tester");

const handleRegister = async () => {
try {
await axios.post("http://localhost:5000/api/auth/register", {
name,
email,
password,
role
});

alert("Registered Successfully");

} catch (error) {
alert("Error");
}
};

return (
<div className="auth-container">

<h2>Register</h2>

<input
type="text"
placeholder="Name"
onChange={(e) => setName(e.target.value)}
/>

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

<select onChange={(e) => setRole(e.target.value)}>
<option>Admin</option>
<option>Developer</option>
<option>Tester</option>
</select>

<button onClick={handleRegister}>Register</button>

</div>
);
}

export default Register;