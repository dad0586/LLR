import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo";
import "../header/main.scss"

const Header = () => {
    return (
        <>
            <div className='container'>
                <div className="navbar">
                    <div className="navbar_logo">
                        <Logo />
                    </div>
                    <div className="navbar_links">
                        <Link to="/"> Bosh sahifa </Link>
                        <Link to="/tv"> TV </Link>
                        <Link to="/filmlar"> Filmlar </Link>
                        <Link to="/seriallar"> Seriallar </Link>
                        <Link to="/multfilmlar"> Multfilmlar </Link>
                        <Link to="/anime"> Anime </Link>
                        <Link to="/radio"> Radio </Link>
                        <Link to="/obunalar"> Obunalar </Link>
                        <Link to="/boshqalar"> Boshqalar </Link>
                    </div>
                    <div className="navbar_search">
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;