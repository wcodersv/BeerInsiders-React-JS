import React from 'react';
import styles from './Solution.module.scss';

export const Solution = () => {

    const data = [
        {
            number: 1,
            header: `Отправим образцы на пробу`,
            text: `Заполните форму и укажите напитки, которые хотите попробовать. Менеджер по продажам
             Beer Insiders позвонит вам и отправит образцы в течение дня.`
        },

        {
            number: 2,
            header: `Проведем дегустацию с сомелье`,
            text: `Заполните форму и расскажите, в чем сейчас сложность с продажами. Мы организуем дегустацию
             с сомелье в вашем заведении. Выезжаем в пределах города с 10 до 20 ч.`
        },
    ]
    return (
        <div className={styles.container}>
            <h2 className='header'>Как Beer Insiders решает эти проблемы</h2>

            <div className={`${styles.container_content} gray_background`}>
                <p className={styles.container_content_description}>
                    Чтобы клиенты возвращались, а статистика продаж радовала владельца заведения, карту нужно обновлять
                    быстро и бесплатно. Например, за 5 дней вместо месяца. Для этого предлагаем два решения.
                </p>
                <div className={styles.container_content_cards}>

                    {data.map(card => (
                        <div className={styles.container_content_card}>
                            <div className={styles.container_circle}>
                                <p className={styles.container_circle_number}>{card.number}</p>
                            </div>
                            <h3 className={styles.container_content_card_title}>{card.header}</h3>
                            <p className={styles.container_content_card_description}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
