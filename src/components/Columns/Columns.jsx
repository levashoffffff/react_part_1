import box from './../../img/box.png';
import styles from './Columns.module.css';
import ColumnsColum from './ColumnsColum/ColumnsColum';

let columData = [
  {  id: 1, 
    "itemTitle": "Заголовок 1",
    "itemText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен."
  },
  {  id: 2, 
    "itemTitle": "Заголовок 2",
    "itemText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у"
  },
  {  id: 3, 
    "itemTitle": "Заголовок 3",
    "itemText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."
  },
  {  id: 4, 
    "itemTitle": "Заголовок 4",
    "itemText": "По своей сути рыбатекст является "
  },
]

const Columns = () => {
    return (
        <div className={styles.columns}>
        <div className={styles.container}>
          <div className={styles["columns__title"] + ' ' + styles.title}>
            Колонки с flex-контейнерами
          </div>
          <div className={styles["columns__row"]}>

            <ColumnsColum itemTitle={columData}/>

            <ColumnsColum itemTitle={columData}/>

            <ColumnsColum itemTitle={columData}/>

            <ColumnsColum itemTitle={columData}/>

          </div>
        </div>
      </div>
    )
}

export default Columns;