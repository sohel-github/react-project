import React,{ useState,useEffect } from 'react'
import items from "./items"
import Tours from "./Tours"
import './TourList.css'

export default function TourList() {
    const [tours, setTours] = useState(items);

    const notInterested = (id) => {
        const newTour = tours.filter((tour) => tour.id !== id);
        setTours(newTour);
    }

    const getTours = () => {
        return tours.map((item, index) => {
        return <Tours key={index} item={item} notInterested={notInterested} />
        })
    }

    useEffect(() => {
        getTours();
    });

    if(tours.length === 0){
        return (
        <div className="container">
            <h1>NO Tour List</h1>
            <button onClick={getTours}>Refresh</button>
        </div>
        )
    }

    return (
        <div className="container">
            <h1>Our Tours</h1>
            {getTours()}
        </div>
    )
}
