import './AboutIt.scss';
import LogoDark from '../LogoDark/LogoDark';
import AboutBeans from '../../resourses/img/about_beans.jpg';


const AboutIt = () => {
 return (
    <div className="about">
        <div className="container">
            <div className="about__inner">
            <div className="about__image">
                    <img src={AboutBeans} alt="" />
            </div>
            <div className="about__info">
                <div className="about__title">About our beans</div>
                <LogoDark/>
                <div className="about__descr-first">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</div>
                <div className="about__descr-second">Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.</div>
            </div>
            </div>
        </div>
    </div>
 )
}
export default AboutIt;