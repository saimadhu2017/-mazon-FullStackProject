import './Header.css';

function Header() {
    return (
        <div className='header'>
            <a href={"todo"}><img src={require("../../../resources/icons/icon.png")} alt="Logo" className='logo' /></a>
            <ul className="navItems">
                <li className="navItem"><a href={"todo"}>Home</a></li>
                <li className="navItem"><a href={"todo"}>Login</a></li>
                <li className="navItem"><a href={"todo"}><button className="btnSignUp btn btn-light">Sign Up</button></a></li>
            </ul>
        </div>
    );
}

export default Header;
