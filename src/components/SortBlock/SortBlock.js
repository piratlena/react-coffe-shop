import './SortBlock.module.scss';
import Card from '../Cards/Cards';

const SortBlock = ({value, onChangeCategory}) => {
    const categories = ['Brazil', 'Kenya', 'Columbia']

    const arr = [
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 1299},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 1199},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 8499},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 8999},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 1299},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 1199},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 8499},
        {imageUrl: 'img/cards/card.jpg', title: 'AROMISTICO Coffee 1 kg', origin: 'Цена', price: 8999}
       ]
    return (
        <div className='container'>
            <div className='sort'>
                <div className="sort__input">
                    <div className="sort__input-name">Looking for</div>
                    <div className="sort__input-box">
                        <input 
                        className='sort__input-search'
                        type="text" 
                        placeholder='start typing here...'/>
                    </div>
                </div>
                <div className="sort__filter">
                    <div className="sort__filter-text">Or filter</div>
                    <div className="sort__filter-categories">
                        <ul>
                        {categories.map((categoryName, i) => (
                        <li key={i} 
                        onClick={() => onChangeCategory(i)} 
                        className={value===i ? 'active' : ''}>
                        {categoryName}</li>
        ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="results">
                {
                    arr.map((obj) => (
                        <Card
                        imageUrl={obj.imageUrl}
                        title={obj.title}
                        price={obj.price}/>
                    ))
                }
            </div>
        </div>
    )
}
export default SortBlock;