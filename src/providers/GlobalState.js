export const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_dm":
            localStorage.setItem('darkMode', !state.isDark);
            return {
                ...state,
                isDark: !state.isDark
            };
        // case "set_dm":
        //     localStorage.setItem('darkMode', action.payload);
        //     return {
        //         ...state,
        //         isDark: action.payload
        //     }
        // case "load_LS":
        //     return {
        //         ...state,
        //         loadFromLocalStorage: true
        //     };
        default:
            return state;
    }
}

export const initialState = {
    isDark: false,
    loadFromLocalStorage: false
}