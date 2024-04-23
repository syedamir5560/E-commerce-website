import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../Reducer/filterReducer"




const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    gride_view: false,
    sorting_value: "highest",
    filters: {
        text: "",
        category:'all',
        company:'all',
        colors:'all'
    }
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
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: 'SORTING_PRODUCTS' })
    }, [products, state.sorting_value, state.filters])

    // update the filter values

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };


    useEffect(() => {

        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, setGrideView, setListView, Sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)

}



