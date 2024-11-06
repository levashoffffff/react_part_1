import styles from './Columns.module.css';
import ColumnsColum from './ColumnsColum/ColumnsColum';
import React from 'react';
import {addPostObjectData, removePostObjectData} from './../../redux/state.js'


const Columns = (props) => {

    let addItemTitle = React.createRef();
    let addItemText = React.createRef();

    //Добавить пост
    let addPost = () => {
      let addTitle = addItemTitle.current.value;
      let addText = addItemText.current.value;
      /* props.dispatch({
        type: 'ADD-POST',
        itemTitle: addTitle,
        itemText: addText
      }); */
      props.dispatch(addPostObjectData(addTitle, addText));
    }

    //Удалить пост
    let removePost = () => {
      props.dispatch(removePostObjectData());
    }

    //Преобразование
    let columnsItem = props.columnsPage.columData.map((element) => {
      return (
        <ColumnsColum itemTitle={element["itemTitle"]} itemText={element["itemText"]}/>
      )
    })

    return (
        <div className={styles.columns}>
        <div className={styles.container}>
          <div className={styles["columns__title"] + ' ' + styles.title}>
            Колонки с flex-контейнерами
          </div>
          <div className={styles["columns__row"]}>

            {columnsItem}  

          </div>
          <div className={styles["add__post"]}>
            <div>
              <input type="text" ref={addItemTitle} />
            </div>
            <div>
              <input type="text" ref={addItemText} />
            </div>
            <button type="button" onClick={addPost}>Добавить пост</button>
            <button type="button" onClick={removePost}>Удалить пост</button>
          </div>
        </div>
      </div>
    )
}

export default Columns;