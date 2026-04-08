import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user"));

const logout = () => {
localStorage.removeItem("user");
navigate("/");
};

return(

<div style={{
background:"#020617",
padding:"15px",
display:"flex",
gap:"20px"
}}>

<Link to="/dashboard">Dashboard</Link>

{user?.role === "Tester" && (
<Link to="/create">Create Bug</Link>
)}

<Link to="/bugs">Bug List</Link>

{user?.role === "Admin" && (
<Link to="/admin">Admin Panel</Link>
)}

<button onClick={logout}>Logout</button>

</div>

);

}

export default Navbar;