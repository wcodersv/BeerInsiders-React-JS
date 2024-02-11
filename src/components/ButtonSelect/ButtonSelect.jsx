import React from 'react';
import styles from './ButtonSelect.module.scss';

export const ButtonSelect = ({ content, selectedValues, onSelect }) => {
    const isSelected = selectedValues && selectedValues.includes(content); 

    const buttonClasses = `${styles.container} ${isSelected ? styles.container_selected : ''}`;

    const handleButtonClick = () => {
        if (onSelect) {

            const updatedValues = isSelected
                ? selectedValues.filter(value => value !== content)
                : [...selectedValues, content];

            onSelect(updatedValues);
        }
    };

    return (
        <div
            className={buttonClasses}
            onClick={handleButtonClick}
        >
            {content}
        </div>
    );
};
