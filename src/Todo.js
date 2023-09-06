import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <form>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
        </div>
    );
};

export default Todo;