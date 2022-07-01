import './MainArea.css';
import {useEffect, useState} from "react";

export function MainArea({selectedTodo, onEditComplete}) {
    const [description, setDescription] = useState(selectedTodo.description);
    const [saveIndicator, setSaveIndicator] = useState('saved');

    useEffect(() => {
        setDescription(selectedTodo.description);
    }, [selectedTodo]);

    const onChangeFieldsHandler = (value) => {
        setDescription(value);
        setSaveIndicator('unsaved');
    }
    const onSave = () => {
        saveIndicator === 'unsaved' && onEditComplete({
            id: selectedTodo.id,
            title: selectedTodo.title,
            description
        });
    }

    return (
        <div className='description-wrapper'>

            <h2 className="main-area-header">
                {selectedTodo.title}
            </h2>

            <textarea
                value={description}
                onChange={({target}) => onChangeFieldsHandler(target.value)}
                className="main-area-description"
            />

            <button className='button-save' onClick={onSave}>Save</button>
            <h2 className="history">History</h2>
        </div>
    );
}