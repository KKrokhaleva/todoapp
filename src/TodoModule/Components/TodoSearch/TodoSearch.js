import './TodoSearch.css';
import {useState} from "react";


export function TodoSearch ({ onFormSubmitHandler, createItem  }) {
    const[item, setItem] = useState({title:'' , description:''})

    const addNewItem= (e) => {
        e.preventDefault();
        const newItem = {
            ...item, id:Date.now()
        }
        createItem(newItem);
        setItem({title: '' , description: ''})
    }
        return (
            <form className="form-create" onSubmit={onFormSubmitHandler}>
                <input
                    value={item.title}
                    onChange={e => setItem({ title: e.target.value})}
                    className='create-input'
                    type="text"
                    placeholder="What you need to do?"
                />
                <button onClick={addNewItem} className="create-btn">+</button>
            </form>
        );
}