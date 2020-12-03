import React from 'react'

export default function List({list, removeItem, editItem}) {
    return (
        <>
            {list.map((item) => {
                const { id, title } = item;
                return <div className="list-inner" key={id}>
                    <div>{title}</div>
                    <div><span onClick={()=>editItem(id)}>edit</span> | <span onClick={()=>removeItem(id)}>delete</span></div>
                </div>
            })}
        </>
    )
}
