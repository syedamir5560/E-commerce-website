import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";

import reducer from "../Reducer/filterReducer"

const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    gride_view: false,
    sorting_value: "highest"

};


export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext()

    // console.log(products )
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGrideView = () => {
        return dispatch({ type: "SET_GRIDVIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_LISTVIEW" })
    }

    const Sorting = (event) => {
        let userValue = event.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    // to sort the product
    useEffect(() => {
        dispatch({ type: 'SORTING_PRODUCTS' })
    }, [state.sorting_value])


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, setGrideView, setListView, Sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)

}