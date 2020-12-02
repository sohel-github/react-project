import React, {useState} from "react";
import items from "./items";
import Menu from "./Menu";
import Category from "./Category";
import './Food.css';

export default function Food() {
    const [menus, setMenus] = useState(items);

    const getAllCategories = ['all', ...new Set(items.map((item,index) => item.category))];

    const filterItems = (category) => {
        if(category === "all"){
            setMenus(items);
            return;
        }
        const newItems = items.filter(item => item.category === category);
        setMenus(newItems);
    }
    return (
        <div className="food-app">
            <h1 className="heading">Our Menu List</h1>
            <div className="food-header">
                <Category getAllCategories={getAllCategories} filterItems={filterItems} />
            </div>
            <div className="menus">
                {menus.map((menu) => {
                    return <Menu key={menu.id} menu={menu} />
                })}
            </div>
        </div>
    );
}
