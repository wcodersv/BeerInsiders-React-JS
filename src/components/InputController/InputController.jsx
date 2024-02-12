// InputController.jsx
import React from 'react';
import styles from './InputController.module.scss';
import { Controller } from 'react-hook-form';

export const InputController = ({
    control,
    name,
    required,
    maxLengthInput,
    inputType = 'text',
    numericOnly = false,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={''}
            rules={{ maxLength: maxLengthInput, required: required }}
            render={({ field }) => {
                const handleChange = (e) => {
                    let updatedValue = '';

                    if (numericOnly) {
                        const numericValue = e.target.value.replace(/\D/g, '');
                        const stringValue = String(numericValue)

                        if (stringValue.length > maxLengthInput) {
                            const limitedValue = stringValue.slice(0, maxLengthInput);
                            updatedValue = limitedValue;
                        } else {
                            updatedValue = numericValue;
                        }

                    } else {
                        let trimmedValue = e.target.value.trimStart().replace(/\s\s+/g, ' ');
                        updatedValue = trimmedValue;
                    }

                    field.onChange(updatedValue);
                };

                return (
                    <div className={styles.container}>
                        <input
                            type={inputType}
                            id={name}
                            onChange={handleChange}
                            value={field.value}
                        />
                    </div>
                );
            }}
        />
    );
};
