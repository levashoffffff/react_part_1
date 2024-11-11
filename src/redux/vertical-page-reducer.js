
let initialState = {
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

const verticalPageReducer = (state = initialState, action) => {
    return state;
}

export default verticalPageReducer;