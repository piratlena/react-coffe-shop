import './SortBlock.module.scss';
import React from "react";
import { FilterContext } from '../../app/App';
import Card from '../Cards/Cards';
import Categories from '../Categories/Categories';
import Skeleton from '../Skeleton/Skeleton';

const SortBlock = () => {
       const [items, setItems] = React.useState([]);
       const [isLoading, setIsLoading] = React.useState(true);
       const {searchValue} = React.useContext(FilterContext);
       const [categoryId, setCategoryId] = React.useState(0);
      

       React.useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/products?_limit=8&category=${categoryId}`)
        .then((res) => res.json())
        
        .then((arr) => {
            setItems(arr);
            setIsLoading(false)
       })
    }, [searchValue, categoryId])

    const coffe =  items.map((obj) => <Card key={obj.id} {...obj}/>);

    const onChangeCategory = (id) => {
        console.log(id)
        setCategoryId(id);
      }
    
       
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
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                </div>
            </div>
            <div className="results">
                {
                    isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) :
                  coffe
                }
            </div>
            <span>More</span>
        </div>
    )
}
export default SortBlock;