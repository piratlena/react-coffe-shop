import './Cards.scss';
const Card = (props) => {
   return (
    <div className="product__item">
        <img src={props.imageUrl} alt="product" className="product__img" />
        <div className="product__descr">{props.title}</div>
        <div className="product__price">{props.price}$</div>
    </div>
   )
}
export default Card;