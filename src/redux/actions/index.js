const actions = {
    addAsync: () => dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'ADD'
            });
        }, 2000);
    },
    add: () => {
        return {
            type: 'ADD'
        };
    },
    setListData: list => {
        return {
            type: 'SET_LIST_DATA',
            payload: list
        };
    }
};

export default actions;