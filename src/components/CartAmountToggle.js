import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function CartAmountToggle({ amount, setInc, setDec }) {
    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={() => setDec()}>   
                    <FaMinus />
                </button>
                <div className="amount-style">{amount}</div>
                <button onClick={() => setInc()}>
                    <FaPlus />
                </button>
            </div>
            
        </div>
    )
}

export default CartAmountToggle