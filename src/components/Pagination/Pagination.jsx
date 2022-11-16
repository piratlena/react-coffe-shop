import React, { useContext} from 'react';
import { FilterContext } from '../../app/App';
import './Pagination.module.scss'

export const Pagination = () => {

    const {
        currentPage,
        setCurrentPage
    } = useContext(FilterContext)
   
    const pages = [0,1, 2, 3, 4, 5]
    return (
        <div className="pages">
        {pages.map((page, index) => <span 
        key={index} className={page == currentPage ? "current-page" : "page"}
        onClick={() => setCurrentPage(page)}
        >{page + 1}</span>)}
    </div>
    )
}