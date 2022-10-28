import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Manoharjunga from "./pages/Manoharjunga.jsx";
import Profoodsapp from "./pages/Profoodsapp.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/manoharjunga" element={<Manoharjunga />} />
<Route path="/profoodsapp" element={<Profoodsapp />} />
    </Routes>
  );
}
