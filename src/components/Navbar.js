import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navb">
            <div className="logo">
                <img src='logoicon.png' alt="" className="logoImg" />
            </div>
            <div className="nav-links">
                <ul className="links">
                    <li className="link"><a href="/" className="l">Home</a></li>
                    <li className="link"><a href="/feature-blogs" className="l">Blogs</a></li>
                    <li className="link"><a href="#about" className="l">About</a></li>
                    <li className="link"><a href="#event" className="l">Events</a></li>
                </ul>
       </div>
            <div className="reg">
                <a href="/login" className="log">Login</a>
                <a href="/register" className="sign">Sign Up</a>
            </div>
        </nav>
     );
}
 
export default Navbar;