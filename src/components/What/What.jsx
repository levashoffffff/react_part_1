import logo from './../../img/img_1.jpg';
import styles from './What.module.css';

const What = () => {
    return (
        <div className={styles.what}>
            <div className={styles.container}>
                <div className={styles["what__row"]}>
                    <div className={styles["what__image"]}>
                        <img src={logo} alt="img_1" />
                    </div>
                    <div className={styles["what__body"]}>
                        <div className={styles["what__title"] + ' ' + styles.title}>
                            Что такое текст?
                        </div>
                        <div className={styles["what__text"]}>
                            <p>
                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            </p>
                            <p>
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default What;