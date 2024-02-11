import React from 'react'
import styles from './ButtonActionSubmit.module.scss';

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
