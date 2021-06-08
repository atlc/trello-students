export const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_dm":
            return {
                ...state,
                isDark: !state.isDark
            };
        case "set_dm":
            return {
                ...state,
                isDark: action.payload
            }
        case "load_LS":
            return {
                ...state,
                loadFromLocalStorage: true
            };
        default:
            return state;
    }
}

export const initialState = {
    isDark: false,
    loadFromLocalStorage: false
}