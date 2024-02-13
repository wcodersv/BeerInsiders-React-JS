import React from 'react'
import styles from './Button.module.scss';

export const ButtonActionSubmit = ({ content }) => {
    return (
        <button
            type='submit'
            className={styles.container}
        >
            {content}
        </button>
    )
}
