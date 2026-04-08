import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BugList() {

const [bugs, setBugs] = useState([]);

const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
fetchBugs();
}, []);

const fetchBugs = () => {
axios.get("http://localhost:5000/api/bugs")
.then(res => setBugs(res.data));
};

const updateStatus = async (id,status) => {

await axios.put(
`http://localhost:5000/api/bugs/${id}`,
{status}
);

fetchBugs();

};

return (

<div>

<Navbar/>

<h2 style={{padding:"20px"}}>Bug List</h2>

{bugs.map(bug => (

<div key={bug._id}
style={{
background:"#020617",
margin:"15px",
padding:"15px",
borderRadius:"8px"
}}>

<h3>{bug.title}</h3>

<p>{bug.description}</p>

<p>Priority: {bug.priority}</p>

<p>Status: {bug.status}</p>

{/* Developer & Admin Can Update */}

{(user?.role === "Developer" || user?.role === "Admin") && (

<select
style={{
padding:"8px",
marginTop:"10px"
}}
onChange={(e)=>
updateStatus(bug._id,e.target.value)
}
>

<option value="">Update Status</option>
<option>Open</option>
<option>In Progress</option>
<option>Resolved</option>

</select>

)}

</div>

))}

</div>

);

}

export default BugList;