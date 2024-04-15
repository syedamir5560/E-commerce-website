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
        let res = await axios.get(url)
        let pro = await res.data
        console.log(pro)

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