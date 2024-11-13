
import Columns from './Columns.jsx';
import React from 'react';
import { addPostObjectData, removePostObjectData } from './../../redux/columns-page-reducer.js'


const ColumnsContainer = (props) => {
  let state = props.store.getState();
  //Добавить пост
  let addPost = (addTitle, addText) => {
    props.store.dispatch(addPostObjectData(addTitle, addText));
  }

  //Удалить пост
  let removePost = () => {
    props.store.dispatch(removePostObjectData());
  }

  return (
    <Columns
      columnsPage={state.columnsPage}
      addPost={addPost}
      removePost={removePost} />
  )
}

export default ColumnsContainer;