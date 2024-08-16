function NavLinkComponent(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.goto}>{props.text}</a>
        </li>
    )
}

export default NavLinkComponent;