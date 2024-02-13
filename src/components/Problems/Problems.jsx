import React from 'react';
import styles from './Problems.module.scss';
import data from '../../data/problemsData';

export const Problems = () => {

    return (
        <div className={styles.container}>
            <h2 className='header'>Как заведения обновляют карту сейчас</h2>

            <div className={`${styles.container_content} gray_background`}>
                {data.map((inform, index) => (
                    <div className={styles.container_content_card} key={`problems-${index}`}>
                        <div className={styles.container_content_card_header}>
                            <h3 className={styles.container_content_card_header_title}>{inform.title} </h3>
                            <p className={`${styles.container_content_card_header_emoji} ${index === 0 ? styles.container_content_card_header_rotate : ''}`}>
                                {inform.emoji}
                            </p>
                        </div>
                        <div className={styles.container_content_card_main}>
                            <img src={inform.icon} alt="" className={styles.container_content_card_main_icon} />
                            <p className={styles.container_content_card_main_description}>{inform.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
