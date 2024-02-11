import React from 'react'
import styles from './ButtonAction.module.scss';

export const ButtonAction = ({ content, onClick, typeButton = 'button' }) => {

    return (
        <button
            type={typeButton}
            onClick={onClick}
            className={styles.container}
        >
            {content}
        </button>


    )
}
