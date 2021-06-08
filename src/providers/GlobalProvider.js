import React, { useReducer, createContext, useEffect } from 'react';
import { reducer, initialState } from './GlobalState';


// createContext creates a provider AND a consumer
export const GlobalContext = createContext({
    state: initialState,
    dispatch: (action) => { }
});

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => { document.body.classList.add('bg-gray-200') }, []);

    useEffect(() => {
        if (state.isDark) {
            document.body.classList.add('dark', 'bg-gray-700', 'text-white')
        } else {
            document.body.classList.remove('dark', 'bg-gray-700', 'text-white')
        }
    }, [state.isDark])

    return (
        <GlobalContext.Provider value={{ state, dispatch }} >
            {children}
        </GlobalContext.Provider>
    );
}