
import styles from './VerticalItem.module.css'

const VerticalItem = (props) => {
    return(
      <div className={styles["vertical__column"]}>
        <div className={styles["vertical__item"]}>
          <div className={styles["vertical__subtitle"]}>{props.verticalSubtitle}</div>
          <div className={styles["vertical__label"]}>{props.verticalLabel}</div>
          <div className={styles["vertical__text"]}>
            <p>
              {props.verticalText}
            </p>
          </div>
          <a href="#" className={styles["vertical__btn"]}>подписаться</a>
        </div>
      </div>
    )
  }

export default VerticalItem;