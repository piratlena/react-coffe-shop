import './header.scss';
import logoTwoGrains from '../../resourses/img/logo_two-grains.svg'
const Header = () => {

    return (
        <header className='header'>
            <div className="header__wrapper">
            <div className="container">
           <img src={logoTwoGrains} className="header__logo" alt='logo'></img>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list-item'><a href="#" className='header__link'>Coffee house</a></li>
                    <li className='header__list-item'><a href="#" className='header__link'>Our coffee</a></li>
                    <li className='header__list-item'><a href="#" className='header__link'>For your pleasure</a></li>
                </ul>
            </nav>
           </div>
            </div>
        </header>
    )

}
export default Header;