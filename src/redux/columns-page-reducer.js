const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';

let initialState = {
    columData: [
        {
            id: 1,
            "itemTitle": "Заголовок 1",
            "itemText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен."
        },
        {
            id: 2,
            "itemTitle": "Заголовок 2",
            "itemText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у"
        },
        {
            id: 3,
            "itemTitle": "Заголовок 3",
            "itemText": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."
        },
        {
            id: 4,
            "itemTitle": "Заголовок 4",
            "itemText": "По своей сути рыбатекст является "
        },
    ]
};

const columnsPageReducer = (state = initialState, action) => {
    if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            "itemTitle": action.itemTitle,
            "itemText": action.itemText
        }

        state.columData.push(newPost);
    }
    else if (action.type === 'REMOVE-POST') {
        state.columData.pop();
    }
    return state;
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

export default columnsPageReducer;