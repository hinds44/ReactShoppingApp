import { useState } from "react";
import ProductListComponent from "./ProductListComponent";

function GetProductsComponent() {
    const [products, setProducts] = useState(null);

    useState(() => {
        fetch('http://localhost:4000/products')
            .then(results => {
                return results.json();
            }).then(products => {
                setProducts(products);
            })
    }, []);

  return (
      <div className="row">
          {products && <ProductListComponent products={products} />}
      </div>
  );
}

export default GetProductsComponent;