import './SortBlock.module.scss';
import React from "react";
import { FilterContext } from '../../app/App';
import Card from '../Cards/Cards';
import Categories from '../Categories/Categories';
import Skeleton from '../Skeleton/Skeleton';
import { Pagination } from '../Pagination/Pagination';
const SortBlock = () => {
       
    const {searchValue,
            setSearchValue,
            categoryId,
            setCategoryId,
            currentPage,
            setCurrentPage,
            items,
            setItems,
            isLoading,
            setIsLoading} = React.useContext(FilterContext);
       
      
       const delay = () => {
        return new Promise(resolve => setTimeout(resolve, 800))
       }
       React.useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/products?_limit=8&category=${categoryId}&page=${currentPage}`)
        .then((res) => res.json())
        .then(async data => {
            await delay()
            return data
        })
        .then((arr) => {
            setItems(arr);
            setIsLoading(false)
       })
    }, [searchValue, categoryId, currentPage])

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
            <Pagination
            onChangePage={number => setCurrentPage(number)}/>
        </div>
    )
}
export default SortBlock;