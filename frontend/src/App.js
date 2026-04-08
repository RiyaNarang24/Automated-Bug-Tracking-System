import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBug from "./pages/CreateBug";
import BugList from "./pages/BugList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import "./App.css";
function App() {
return (
<Router>
<Routes>

<Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/create" element={<CreateBug />} />
<Route path="/bugs" element={<BugList />} />
<Route path="/admin" element={<Admin />} />
</Routes>
</Router>
);
}

export default App;