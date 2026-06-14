import ProductCard from "./ProductCard";

export const sampleProducts = [
{ id: 1, name: "Milk", category: "Dairy" },
{ id: 2, name: "Apple", category: "Fruits" },
{ id: 3, name: "Cheese", category: "Dairy" }
];

function ProductList({
products = sampleProducts,
category,
cartItems,
setCartItems
}) {
const filtered =
category === "All"
? products
: products.filter((product) => product.category === category);

if (filtered.length === 0) {
return <p>No products available</p>;
}

return (
<div className="products-section">
<h2>Products</h2>

<div className="product-grid">
{filtered.map((product) => (
<ProductCard
key={product.id}
product={product}
cartItems={cartItems}
setCartItems={setCartItems}
/>
))}
</div>
</div>
);
}

export default ProductList;