import { useState } from "react";
import axios from "axios";

function CreateBug() {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState("Minor");

const createBug = async () => {

await axios.post("http://localhost:5000/api/bugs", {
title,
description,
priority
});

alert("Bug Created");

};

return (
<div>

<h2>Create Bug</h2>

<input
placeholder="Bug Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
></textarea>

<select onChange={(e)=>setPriority(e.target.value)}>

<option>Critical</option>
<option>Major</option>
<option>Minor</option>

</select>

<button onClick={createBug}>
Submit
</button>

</div>
);
}

export default CreateBug;