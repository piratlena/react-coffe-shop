import './Cards.scss';
import CardFirst from '../../resourses/img/card_1.png'
const Card = () => {
    <div className="card__item">
        <img src={CardFirst} alt="card" className="card__img" />
        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
        <div className="card__price">10.73$</div>
    </div>
}
export default Card;