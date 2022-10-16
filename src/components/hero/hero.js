import './hero.scss';
import Threegrains from '../../resourses/img/logo_three-grains.svg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__text">
                    <h1 className='hero__title'>Everything You Love About Coffee</h1>
                    <div className='hero__divider'><img src={Threegrains} alt="logo" /></div>
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