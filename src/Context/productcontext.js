import axios from "axios";
import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext()


const API = 'https://api.pujakaitem.com/api/products'

const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: []
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProduct = async (url) => {
        dispatch({ type: 'SET_LOADING' })
        try {
            const res = await axios.get(url)
            const products = await res.data
            dispatch({ type: 'SET_API_DATA', payload: products })
        } catch (error) {
            dispatch({ type: 'API_ERROR' })
        }

    }

    useEffect(() => {
        getProduct(API)
    }, [])

    return <AppContext.Provider value={{ ...state }}>
        {children}
    </AppContext.Provider>
}

// custom hooks

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext }