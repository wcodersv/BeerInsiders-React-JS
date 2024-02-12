// Input.jsx
import React from 'react';
import styles from './Input.module.scss';


export const Input = ({
    name,
    idLabel,
    register,
    required,
    maxLengthInput,
    inputType = 'text',
    numericOnly = false,
}) => {
    const handleInputChange = (e) => {
        if (numericOnly) {
            const numericValue = e.target.value.replace(/\D/g, '');
            const stringValue = String(numericValue)

            if (stringValue.length > maxLengthInput) {
                const limitedValue = stringValue.slice(0, maxLengthInput);
                e.target.value = limitedValue;
            } else {
                e.target.value = numericValue;
            }

        } else {
            let trimmedValue = e.target.value.trimStart().replace(/\s\s+/g, ' ');
            e.target.value = trimmedValue;
        }
    };

    return (
        <div className={styles.container}>
            <input
                name={name}
                defaultValue={''}
                type={inputType}
                id={idLabel}

                {...register(name, {
                    required: required,
                    maxLength: maxLengthInput,
                    setValueAs: (value) => value.trim() || undefined,
                })}
                onChange={handleInputChange}
            />
        </div>
    );
}

