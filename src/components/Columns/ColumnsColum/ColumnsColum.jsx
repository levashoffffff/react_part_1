import box from './../../../img/box.png';
import styles from './ColumnsColum.module.css';

const ColumnsColum = (props) => {
    return (
      <div className={styles["columns__colum"]}>
        <div className={styles["columns__item"] + ' ' + styles.item}>
          <div className={styles["item__row"]}>
            <div className={styles["item__image"]}><img src={box} alt="check" /></div>
            <div className={styles["item__body"]}>
              <div className={styles["item__title"]}>
                Заголовок 1
              </div>
              <div className={styles["item__text"]}>
                По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ColumnsColum;