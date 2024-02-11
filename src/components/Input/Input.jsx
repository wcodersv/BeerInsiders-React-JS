import React, { useState } from 'react';
import styles from './Input.module.scss';

export const Input = ({ idLabel, handleInput, inputType = 'text' }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {

        let value = e.target.value.trimStart().replace(/\s\s+/g, ' ');
        value = value.replace(/\.\s*$/, '');

        setInputValue(value)

        handleInput(idLabel, value);
    }

    return (
        <div className={styles.container}>
            <input
                type={inputType}
                id={idLabel}
                value={inputValue}
                onChange={handleChange}
                required


            />
        </div>
    )
}
