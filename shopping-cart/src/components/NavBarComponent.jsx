import NavLinkComponent from "./NavLinkComponent";

function NavBarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">Shopping Cart</a>
                <div id="navbarSupportedContent">
                    <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLinkComponent goto={"/"} text={"Home"}></NavLinkComponent>
                        <NavLinkComponent goto={"/products"} text={"Products"}></NavLinkComponent>
                        <NavLinkComponent goto={"/cart"} text={"Cart"}></NavLinkComponent>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarComponent;