import React from 'react'

export default function List({list}) {
    return (
        <>
            {list.map((item) => {
                const { id, title } = item;
                return <div className="list-inner" key={id}>
                    <div>{title}</div>
                    <div><span>edit</span> | <span>delete</span></div>
                </div>
            })}
        </>
    )
}
