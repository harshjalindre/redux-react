export const addItems = (values) => {
        return (dispatch) => {
            dispatch({
                type : 'add',
                payload : values
            })
        }
}

export const removeItems = (values) => {
    return (dispatch) => {
        dispatch({
            type : 'remove',
            payload : values
        })
    }
}