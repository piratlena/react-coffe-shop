import React from "react";


const Categories = ({value, onChangeCategory}) => {
    const categories = ['Brazil', 'Kenya', 'Columbia']

    return (
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
    )
}
export default Categories