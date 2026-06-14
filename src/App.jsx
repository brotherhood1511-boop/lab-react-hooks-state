import { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import "./index.css";

function App() {
const [darkMode, setDarkMode] = useState(false);
const [cartItems, setCartItems] = useState([]);
const [category, setCategory] = useState("All");

return (
<div className={darkMode ? "app dark" : "app light"}>
<div className="container">
<h1>Shopping App</h1>

<div className="top-controls">
<DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

<select
value={category}
onChange={(e) => setCategory(e.target.value)}
className="category-select"
>
<option value="All">All</option>
<option value="Fruits">Fruits</option>
<option value="Dairy">Dairy</option>
</select>
</div>

<div className="content">
<ProductList
category={category}
cartItems={cartItems}
setCartItems={setCartItems}
/>

<Cart cartItems={cartItems} setCartItems={setCartItems} />
</div>
</div>
</div>
);
}

export default App;