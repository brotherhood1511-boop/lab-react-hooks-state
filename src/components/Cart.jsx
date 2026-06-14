function Cart({ cartItems, setCartItems }) {
function handleRemove(indexToRemove) {
const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
setCartItems(updatedCart);
}

return (
<div className="cart-section">
<h2>Shopping Cart</h2>

{cartItems.length === 0 ? (
<p className="empty-message">Your cart is empty</p>
) : (
cartItems.map((item, index) => (
<div key={index} className="cart-item">
<span>{item.name} is in your cart</span>
<button
className="remove-btn"
onClick={() => handleRemove(index)}
>
Remove
</button>
</div>
))
)}
</div>
);
}

export default Cart;