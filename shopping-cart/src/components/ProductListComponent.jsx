import ProductComponent from "./ProductComponent";

function ProductListComponent(props) {
    const productList = props.products.map(product => {
        return (
            <ProductComponent key={product.Id}>
                <p>product.ProductName</p>
                <p>product.UnitPrice</p>
                <p>product.UnitsInStock</p>
                <p>product.Suppliers</p>
            </ProductComponent>
        )
    })
    return productList;
}

export default ProductListComponent;




/*
            "id": 77,
           ProductName": "Original Frankfurter gr�ne So�e",
           UnitPrice": 13.0000,
           UnitsInStock": 32,
           Suppliers": [
                {
                    "CompanyName": "Plutzer Lebensmittelgro�m�rkte AG"
                }
            ]

*/