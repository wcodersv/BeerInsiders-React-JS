import React from 'react';
import styles from '../ButtonSelect.module.scss';
import { Controller } from 'react-hook-form';

export const ButtonSelect = ({ control, name, content, contentId }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const isSelected = field.value && field.value.includes(contentId);

                const buttonClasses = `${styles.container} ${isSelected ? styles.container_selected : ''}`;

                const handleButtonClick = () => {

                    const currentValues = Array.isArray(field.value) ? field.value : [];

                    const updatedValues = isSelected
                        ? currentValues.filter(value => value !== contentId)
                        : [...currentValues, contentId];


                    field.onChange(updatedValues);
                };

                return (
                    <div
                        className={buttonClasses}
                        onClick={handleButtonClick}
                    >
                        {content}
                    </div>
                );
            }}
        />
    );
};
