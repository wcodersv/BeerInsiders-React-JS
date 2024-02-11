import React, { useState } from 'react';
import styles from './SelectOptions.module.scss';
import { problems } from '../../data/dataForm';

export const SelectOptions = ({ handleInput }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState({ value: '', label: '' });

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value, label) => {
        const updatedValue = { value, label };

        setSelectedValue(updatedValue);
        handleInput('problems', updatedValue.label);
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.select_toggle}
                onClick={handleToggleDropdown}
            >
                <p>{selectedValue.label || ''}</p>

                {isOpen ? <div className={styles.select_arrow_active}></div> : <div className={styles.select_arrow}></div>}

            </div>

            {isOpen && (
                <div className={styles.select_options}>
                    {problems.map((problem) => (
                        <div
                            key={problem.value}
                            className={`${styles.select_option} 
                            ${selectedValue.value === problem.value ? styles.select_selected : ''}`
                            }
                            onClick={() => handleOptionClick(problem.value, problem.label)}
                        >
                            <p>{problem.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
