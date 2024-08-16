import NavLinkComponent from "./NavLinkComponent";

function NavBarComponent() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <div id="navbarSupportedContent">
                    <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLinkComponent goto={"/"} text={"All Blogs"}></NavLinkComponent>
                        <NavLinkComponent goto={"/new-blog"} text={"New Blog"}></NavLinkComponent>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBarComponent;