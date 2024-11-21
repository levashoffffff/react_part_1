
import Columns from './Columns.jsx';
import React from 'react';
import { addPostObjectData, removePostObjectData } from './../../redux/columns-page-reducer.js'
import { connect } from 'react-redux';


/* const ColumnsContainer = (props) => {
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
} */

let mapStateToProps = (state) => {
  return {
    columnsPage: state.columnsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (addTitle, addText) => {
      dispatch(addPostObjectData(addTitle, addText));
    },
    removePost: () => {
      dispatch(removePostObjectData());
    }
  }
}


const ColumnsContainer = connect(mapStateToProps, mapDispatchToProps)(Columns);

export default ColumnsContainer;