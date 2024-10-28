import styles from './Vertical.module.css';

const Vertical = () => {
    return(
        <div className={styles.vertical}>
        <div className={styles.container}>
          <div className={styles["vertical__title"] + ' ' + styles.title}>Вертикальное выравнивание</div>
          <div className={styles["vertical__body"]}>
            <div className={styles["vertical__row"]}>

              <div className={styles["vertical__column"]}>
                <div className={styles["vertical__item"]}>
                  <div className={styles["vertical__subtitle"]}>БУДУ РАД</div>
                  <div className={styles["vertical__label"]}>подписке</div>
                  <div className={styles["vertical__text"]}>
                    <p>
                      По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                    </p>
                  </div>
                  <a href="#" className={styles["vertical__btn"]}>подписаться</a>
                </div>
              </div>

              <div className={styles["vertical__column"]}>
                <div className={styles["vertical__item"]}>
                  <div className={styles["vertical__subtitle"]}>БУДУ РАД</div>
                  <div className={styles["vertical__label"]}>подписке</div>
                  <div className={styles["vertical__text"]}>
                    <p>
                      По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                    </p>
                  </div>
                  <a href="#" className={styles["vertical__btn"]}>подписаться</a>
                </div>
              </div>
              
              <div className={styles["vertical__column"]}>
                <div className={styles["vertical__item"]}>
                  <div className={styles["vertical__subtitle"]}>БУДУ РАД</div>
                  <div className={styles["vertical__label"]}>подписке</div>
                  <div className={styles["vertical__text"]}>
                    <p>
                      По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                    </p>
                  </div>
                  <a href="#" className={styles["vertical__btn"]}>подписаться</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
}

export default Vertical;