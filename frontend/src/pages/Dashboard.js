import Navbar from "../components/Navbar";

function Dashboard(){

const user = JSON.parse(localStorage.getItem("user"));
{user?.role === "Admin" && (
<p>Admin Controls Enabled</p>
)}

{user?.role === "Developer" && (
<p>Developer Dashboard</p>
)}

{user?.role === "Tester" && (
<p>Report Bugs Here</p>
)}
return(

<div>

<Navbar/>

<h2>Dashboard</h2>

<p>Welcome {user?.name}</p>

<p>Role: {user?.role}</p>

</div>

);

}

export default Dashboard;