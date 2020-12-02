import React,{useState} from 'react'
import items from './items'
import './Lorem.css'

export default function Lorem() {
    
    const [count, setCount] = useState(0);
    const [paragrap, setParagrap] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let ammount = parseInt(count);
        if(count <= 0){
            ammount = 1;
        }
        if(count > 10){
            ammount = 10;
        }
        setParagrap(items.slice(0, ammount));
    }

    return (
        <div className="lorem-box">
            <h1>Paragrap Ganerator</h1>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label>Count : </label>
                <input type='number' name='count' value={count} onChange={(e)=>setCount(e.target.value)} />
                <button type='submit'>Ganerate</button>
            </form>
            <article className="para">
                {paragrap.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </article>
        </div>
    )
}