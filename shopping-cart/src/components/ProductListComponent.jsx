import ProductComponent from "./ProductComponent";

function ProductListComponent(props) {
    const productList = props.products.map(product => {
        return (
            <ProductComponent key={product.Id} product={product} handler={props.addToCartHandler} />
            
        );
    })
    return productList;
}

export default ProductListComponent;




