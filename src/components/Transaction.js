import React from "react";
export const Transaction = ({transaction}) => {
    const sign = transaction.amount <0 ? '-' : '+';
    return (
        <div>
            <li className={transaction.amount<0 ? 'minus' : 'plus'}>
                {/* You need to cahtch transaction here using props or destructring */}
                {transaction.text}  <span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button></li>

        </div>
    )
}
