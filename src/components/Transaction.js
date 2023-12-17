import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {/* You need to catch transaction here using props or destructring, we used destructring */}
                {transaction.text}  <span>{sign}${Math.abs(transaction.amount)}</span><button
                onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
                </li>

        </div>
    )
}
