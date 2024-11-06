/* import { renderEntireTree } from "../render.js"; */
const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';

let store = {
  _state: {
    columnsPage: {
      columData: [
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
    },
    verticalPage: {
      verticalData: [
        { id: 1,
          "verticalSubtitle": "буду рад",
          "verticalLabel": "подписке",
          "verticalText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках"
        },
        { id: 2,
          "verticalSubtitle": "не буду рад",
          "verticalLabel": "дизлайку",
          "verticalText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен."
        },
        { id: 3,
          "verticalSubtitle": "нейтрально",
          "verticalLabel": "просмотр",
          "verticalText": "По своей сути рыбатекст является альтернативой традиционному"
        }
      ]
    }
  },
  _renderEntireTree() {
    console.log("Render your page again");
  },
  get_state() {
    return this._state;
  },
/*   addPost(itemTitle, itemText) {
    let newPost = {
      id: 5,
      "itemTitle": itemTitle,
      "itemText": itemText
    }
  
    this._state.columnsPage.columData.push(newPost);
  
    this._renderEntireTree(this.get_state());
  }, */
  dispatch(action) {
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        "itemTitle": action.itemTitle,
        "itemText": action.itemText
      }
    
      this._state.columnsPage.columData.push(newPost);
    
      this._renderEntireTree(this.get_state());
    }
    else if(action.type === 'REMOVE-POST') {
      this._state.columnsPage.columData.pop();
      this._renderEntireTree(this.get_state());
    }
  },
  observer(observer) {
    this._renderEntireTree = observer;
  }
}

//action
export let addPostObjectData = (itemTitle, itemText) => {
  return {
    type: ADD_POST,
    itemTitle,
    itemText
  }
}

//action
export let removePostObjectData = () => {
  return {
    type: REMOVE_POST,
  }
}


/* let renderEntireTree = () => {
  console.log("Render your page again");
} */


/* export let addPost = (itemTitle, itemText) => {

  let newPost = {
    id: 5,
    "itemTitle": itemTitle,
    "itemText": itemText
  }

  state.columnsPage.columData.push(newPost);

  renderEntireTree(state);
} */

/* export let observer = (observer) => {
  renderEntireTree = observer;
} */



export default store;