import { Link } from 'react-router-dom'
import './header.scss';
import logoTwoGrains from '../../resourses/img/logo_two-grains.svg';
import Cart from '../../resourses/img/cart.svg';
import User from '../../resourses/img/user.svg';
import Like from '../../resourses/img/like.svg'
const Header = () => {

    return (
        <header className='header'>
            <div className="header__wrapper">
            <div className="container">
            <Link to="/">
            <div className="header__info">
            <div className="header__menu">
           <img src={logoTwoGrains} className="header__logo" alt='logo'></img>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list-item'><a href="#" className='header__link'>Coffee house</a></li>
                    <li className='header__list-item'><a href="#" className='header__link'>Our coffee</a></li>
                    <li className='header__list-item'><a href="#" className='header__link'>For your pleasure</a></li>
                </ul>
            </nav>
           </div>

            <ul className="header__cart">
             <li className="header__cart-box">
             <img src={Cart} alt="user_icon" />
             </li>
              <li>1205 руб.</li>
              <li><img src={Like} alt="user_icon" /></li>
            <li><img src={User} alt="user_icon" /></li>
          </ul>
            </div>
            </Link>
           </div>
            </div>
        </header>
    )

}
export default Header;