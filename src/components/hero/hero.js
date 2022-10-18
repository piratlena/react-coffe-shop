import './hero.scss';
import LogoLight from '../LogoLight/LogoLight';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__text">
                    <h1 className='hero__title'>Everything You Love About Coffee</h1>
                    <LogoLight/>
                    <h2 className='hero__subtitle'>We makes every day full of energy and taste
                    <br />
                    Want to try our beans?</h2>
                    <button className='hero__btn'><a href="#">More</a></button>
                </div>
            </div>
        </div>
    )
}
export default Hero;