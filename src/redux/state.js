import { renderEntireTree } from "../render.js";

let state = {
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
};


export let addPost = (itemTitle, itemText) => {

  let newPost = {
    id: 5,
    "itemTitle": itemTitle,
    "itemText": itemText
  }

  state.columnsPage.columData.push(newPost);

  renderEntireTree(state);
}

export default state;