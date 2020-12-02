import React,{useState} from 'react'

export default function Tours({item, notInterested}) {
    const [readMore, setReadMore] = useState(false);
    
    const { id, title, desc, image } = item;
    return (
        <div className="items" key={id}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>
                {
                    readMore ? desc : `${desc.substr(0, 100)} ...`
                }
                <button onClick={()=> setReadMore(!readMore)}>
                    { readMore ? 'Show Less' : 'Read More' }
                </button>
            </p>
            <button className="not-btn" onClick={()=> notInterested(id)}>Not Interested</button>
        </div>
    )
}