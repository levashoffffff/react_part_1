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
                {props.itemTitle}
              </div>
              <div className={styles["item__text"]}>
                {props.itemText}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ColumnsColum;