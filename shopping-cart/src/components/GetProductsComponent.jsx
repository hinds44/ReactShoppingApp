import { useRef, useState } from "react";
import ProductListComponent from "./ProductListComponent";

function GetProductsComponent() {
    const [products, setProducts] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useState(() => {
        fetch('http://localhost:4000/products')
            .then(results => {
                return results.json();
            }).then(products => {
                setProducts(products);
            })
    }, []);



    function addToCart(id) {
        const cartItem = products.filter(item => item.id == id);
        console.log("added to cart");
        setCartItems([...cartItems, cartItem]);
    }

    return (
        <div className="row">
            {products && <ProductListComponent products={products} addToCartHandler={addToCart}/>}
        </div>
    );
}

export default GetProductsComponent;