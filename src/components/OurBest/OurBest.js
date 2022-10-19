import './OurBest.scss';
import CardFirst from '../../resourses/img/card_1.png';
import CardSecond from '../../resourses/img/card_2.png';
import CardThird from '../../resourses/img/card_3.png';
const OurBest = () => {
    return (
        <div className="cards">
            <div className="container">
                <div className="cards__title">Our best</div>
                <div className="cards__block">
                    <div className="card__item">
                        <img src={CardFirst} alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div>
                    <div className="card__item">
                        <img src={CardSecond} alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div>
                    <div className="card__item">
                        <img src={CardThird} alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div>
             
                </div>
            </div>
        </div>
    )
}
export default OurBest;