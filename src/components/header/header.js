import './header.scss'
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link className="header__link" to="/">
                <img className="header__logo" src={logo}></img>
                <span className="header__home-link">Home</span>
            </Link>
            <h2 className="header__postTitle">{props.pageName}</h2>
        </header>
    );
}

export default Header;