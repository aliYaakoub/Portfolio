import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const ContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true);

    const value = {
        darkMode,
        setDarkMode,
        colors: {
            primary: darkMode ? '#495057' : '#fff',
            secondary: darkMode ? '#6B7280' : '#D1D5DB',
            // accent: '#9a8c98',
            accent: darkMode ? '#adb5bd' : '#9a8c98',
            text: {
                primary: darkMode ? '#fff' : '#000',
                secondary: darkMode ? '#000' : '#fff'
            }
        }
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}