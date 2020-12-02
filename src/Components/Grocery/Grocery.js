import React,{useState} from 'react'
import './Grocery.css'
import Alert from './Alert';
import List from './List';

export default function Grocery() {

    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show:false, msg:'', type:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            // validation message code goes here...
        }else if(name && isEditing){
            // editing code goes here..
        }else{
            // add list code goes here...
            const newItem = {id: new Date().getTime().toString(), title:name};
            setList([...list, newItem]);
            setName('');
        }
    }

    const clearItems = () => {

    }

    return (
        <section className="grocery-box">
            <h1>Grocery Shop</h1>
            { alert.show && <Alert /> }
            <form className="grocery-form" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <button type="submit">
                    {isEditing ? 'Update' : 'Submit'}
                </button>
            </form>
            
            {list.length > 0 && ( 
                <div className="grocery-list">
                    <List list={list} />
                    <button type="button" className="clear-btn" onClick={()=>clearItems}>Clear Items</button>
                </div>
            )}
            
        </section>
    )
}
