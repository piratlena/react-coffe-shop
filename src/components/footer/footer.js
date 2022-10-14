import './footer.scss';
import logoTwoGrains from '../../resourses/img/logo_two-grains.svg'
import logoThreeGrainsDark from '../../resourses/img/logo_three-grains-dark.svg'

const Footer = () => {

    return (
        <footer className='footer'>
           <div className="container">
            <div className="footer__block-first">
            <img src={logoTwoGrains} className="footer__logo-light" alt='logo'></img>
            <nav className='footer__nav'>
                <ul className='footer__list'>
                    <li className='footer__list-item'><a href="#" className='footer__link'>Coffee house</a></li>
                    <li className='footer__list-item'><a href="#" className='footer__link'>Our coffee</a></li>
                    <li className='footer__list-item'><a href="#" className='footer__link'>For your pleasure</a></li>
                </ul>
            </nav>
            <div className="footer__block-second">
                <img src={logoThreeGrainsDark} className="footer__logo-dark" alt="logo" />
            </div>
            </div>
            
          </div>
        </footer>
    )
}
export default Footer;