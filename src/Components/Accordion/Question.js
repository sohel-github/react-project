import React,{useState} from 'react'
import { printReceived } from 'jest-matcher-utils';

export default function Question({question}) {
    const { title, info } = question;
    const [toggle, setToggle] = useState(true);
    return (
        <div className="accordion">
            <header className="header">
                <h4>{title}</h4>
                <h4 style={{cursor:'pointer'}} onClick={()=> setToggle(!toggle)}>{toggle ? "+" : "-"}</h4>
            </header>
            {toggle ? "" : (<p className="info">{info}</p>)}
        </div>
    )
}
