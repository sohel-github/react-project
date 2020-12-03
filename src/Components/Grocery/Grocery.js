import React,{useState, useEffect} from 'react'
import './Grocery.css'
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
    const list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }else{
        return [];
    }
}

export default function Grocery() {

    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show:false, msg:'', type:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            // validation message code goes here...
            showAlert(true, 'error', 'Please enter the value')
        }else if(name && isEditing){
            // editing code goes here..
            setList(list.map((item) => {
                if(item.id === editID){
                    return {...item, title: name};
                }
                return item;
            }))
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'Item value changed');
        }else{
            showAlert(true, 'success', 'Item added to the list');
            // add list code goes here...
            const newItem = {id: new Date().getTime().toString(), title:name};
            setList([...list, newItem]);
            setName('');
        }
    }

    const showAlert = (show=false,type="",msg="") => {
        setAlert({show,type,msg})
    }

    const clearItems = () => {
        showAlert(true, 'success', 'All items are cleared');
        setList([]);
    }

    const removeItem = (id) => {
        showAlert(true, 'error', 'Items deleted');
        setList(list.filter((item) => item.id !== id));
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list]);

    return (
        <section className="grocery-box">
            <h1>Grocery Shop</h1>
            { alert.show && <Alert {...alert} removeAlert={showAlert} list={list} /> }
            <form className="grocery-form" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /> 
                <button type="submit">
                    {isEditing ? 'Update' : 'Submit'}
                </button>
            </form>
            
            {list.length > 0 && ( 
                <div className="grocery-list">
                    <List list={list} removeItem={removeItem} editItem={editItem} />
                    <button type="button" className="clear-btn" onClick={clearItems}>Clear Items</button>
                </div>
            )}
            
        </section>
    )
}
