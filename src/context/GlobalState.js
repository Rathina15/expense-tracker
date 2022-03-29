import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial this.state.

const initialState = {
    transactions: []
}
//Create context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transactions) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction

    }}>
        {children}
    </GlobalContext.Provider>);
}
export default GlobalProvider