function ProductCard({ product, cartItems, setCartItems }) {
function handleAdd() {
setCartItems([...cartItems, product]);
}

return (
<div className="product-card">
<h3>{product.name}</h3>
<p className="product-category">{product.category}</p>

<button
data-testid={`product-${product.id}`}
className="add-btn"
onClick={handleAdd}
>
Add to Cart
</button>
</div>
);
}

export default ProductCard;