import { Link } from "react-router-dom";

function NotFoundComponent() {
    return (
        <p>
            <div>Sorry page not found</div>
            <Link to="/">back to home...</Link>
        </p>
    );
}

export default NotFoundComponent;