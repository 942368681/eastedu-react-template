const initialState = {
    "title": "Home",
    "num": 0
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                num: state.num + 1
            };
        default:
            return state;
    }
};

export default HomeReducer;