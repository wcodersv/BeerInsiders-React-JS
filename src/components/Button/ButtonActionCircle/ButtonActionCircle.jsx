import React from 'react';
import styles from './ButtonActionCircle.module.scss';

export const ButtonActionCircle = ({ onClick }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1.59668L1 7.59668L7 13.5967" stroke="#4F5352" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
};
