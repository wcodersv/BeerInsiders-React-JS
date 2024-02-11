//FormSuccess.jsx
import React from 'react';
import styles from './FormSuccess.module.scss';

export const FormSuccess = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container_title}>Спасибо за заявку!</h2>
      <p className={styles.container_description}>Менеджер позвонит вам в течение 24 часов 💜</p>
      <p className={styles.container_emoji}>🙂</p>

    </div>
  )
}
