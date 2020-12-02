import React from 'react'

export default function Category({getAllCategories, filterItems}) {
    return (
        <ul>
            {getAllCategories.map((item, index) => {
                return <li key={index} onClick={()=>filterItems(item)}>{item}</li>
            })}
        </ul>
    )
}
