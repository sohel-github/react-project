import React from 'react'

export default function Menu({menu}) {
    const { title, info, img } = menu;
    return (
        <div className="menu-item">
            <div className="image">
                <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    )
}
