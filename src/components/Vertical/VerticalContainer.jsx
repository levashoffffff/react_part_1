import styles from './Vertical.module.css';
import VerticalItem from './VerticalItem/VerticalItem';
import Vertical from './Vertical';
import {connect} from 'react-redux';


/* const Vertical = (props) => {

    //Преобразование
    let verticalItem = props.verticalPage.verticalData.map((element) => {
      return (
        <VerticalItem verticalSubtitle={element.verticalSubtitle} verticalLabel={element.verticalLabel} verticalText={element.verticalText}/>
      )
    }) 
  
    return(
        <div className={styles.vertical}>
        <div className={styles.container}>
          <div className={styles["vertical__title"] + ' ' + styles.title}>Вертикальное выравнивание</div>
          <div className={styles["vertical__body"]}>
            <div className={styles["vertical__row"]}>

              {verticalItem}

            </div>
          </div>
        </div>
      </div>
    )
} */

let mapStateToProps = (state) => {
  return {
    verticalPage: state.verticalPage
  }
}

/* let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (addTitle, addText) => {
      dispatch(addPostObjectData(addTitle, addText));
    },
    removePost: () => {
      dispatch(removePostObjectData());
    }
  }
} */

const VerticalContainer = connect(mapStateToProps)(Vertical);

export default VerticalContainer;