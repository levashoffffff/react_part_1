const ADD_POST = 'ADD-POST';
const REMOVE_POST = 'REMOVE-POST';

const columnsPageReducer = (state, action) => {
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