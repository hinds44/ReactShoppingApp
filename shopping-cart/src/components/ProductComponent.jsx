import './ProductComponent.jsx.css'

function ProductComponent(props) {
    return (
        <div className="col-sm-6 col-lg-3 mb-3" key={props.key}>
            <div className="card">
                <div className="card-body row">
                    <div className="col-12">
                        <h5 className="card-title">{props.product.ProductName}</h5>
                    </div>
                    <div className="ms-auto col-6 text-end align-self-end">
                        <button onClick={() => props.handler(props.key)} className="btn btn-success me-0" disabled={props.product.UnitsInStock <= 0}>
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6">
                            <h5>&#163;{props.product.UnitPrice}</h5>
                        </div>
                        <div className="col-6 text-end">
                            <div className={props.product.UnitsInStock > 0 ? "in-stock" : "not-stock"}>
                                <i className="bi bi-circle-fill "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductComponent;

/*
"id": 77,
ProductName": "Original Frankfurter grüne Soße",
UnitPrice": 13.0000,
UnitsInStock": 32,
Suppliers": [
    {
        "CompanyName": "Plutzer Lebensmittelgroßmärkte AG"
    }
]

*/