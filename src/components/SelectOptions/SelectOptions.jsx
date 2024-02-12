
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import styles from './SelectOptions.module.scss';
import { problems } from '../../data/dataForm';

export const SelectOptions = ({ control, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (value, label, field) => {
        const updatedValue = { value, label };
        field.onChange(updatedValue);
        setIsOpen(false);
    };

    return (
        <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({ field }) => (
                <div className={styles.container}>
                    <div className={styles.select_toggle} onClick={handleToggleDropdown}>
                        <p>{field.value.label || ''}</p>
                        {isOpen ? (
                            <div className={styles.select_arrow_active}></div>
                        ) : (
                            <div className={styles.select_arrow}></div>
                        )}
                    </div>

                    {isOpen && (
                        <div className={styles.select_options}>
                            {problems.map((problem) => (
                                <div
                                    key={problem.value}
                                    className={`${styles.select_option} ${field.value.value === problem.value ? styles.select_selected : ''}`}
                                    onClick={() => handleOptionClick(problem.value, problem.label, field)}
                                >
                                    <p>{problem.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        />
    );
};

