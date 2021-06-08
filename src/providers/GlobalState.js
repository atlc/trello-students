export const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_dm":
            return {
                ...state,
                isDark: !state.isDark
            };
        default:
            return state;
    }
}

export const initialState = {
    isDark: false
}