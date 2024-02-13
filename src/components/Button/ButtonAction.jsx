import React from 'react'
import styles from './Button.module.scss';

export const ButtonAction = ({ content, onClick, typeButton = 'button' }) => {

    return (
        <button
            type={typeButton}
            className={styles.container}
            onClick={onClick}
        >
            {content}
        </button>
    )
}
