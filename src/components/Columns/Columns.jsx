import styles from './Columns.module.css';
import ColumnsColum from './ColumnsColum/ColumnsColum';
import React from 'react';

const Columns = (props) => {

    let addItemTitle = React.createRef();
    let addItemText = React.createRef();

    //Добавить пост
    let onAddPost = () => {
      let addTitle = addItemTitle.current.value;
      let addText = addItemText.current.value;
      props.addPost(addTitle, addText);
      addItemTitle.current.value = "";
      addItemText.current.value = "";
    }

    //Удалить пост
    let onRemovePost = () => {
      props.removePost();
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
            <button type="button" onClick={onAddPost}>Добавить пост</button>
            <button type="button" onClick={onRemovePost}>Удалить пост</button>
          </div>
        </div>
      </div>
    )
}

export default Columns;