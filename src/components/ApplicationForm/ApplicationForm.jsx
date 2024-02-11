import React from 'react'
import styles from './ApplicationForm.module.scss';
import { Form } from '../Form/Form';

export const ApplicationForm = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.container_background} gray_background`}>
                <Form />
            </div>
        </div>
    )
}
