const initialState = {
    "title": "List",
    "list": []
};

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_DATA':
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};

export default ListReducer;