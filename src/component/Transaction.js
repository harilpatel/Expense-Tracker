import React from 'react'

const Transaction = () => {
    return (
        <div>
            <h3>History</h3>
            <ul>
                <li>
                    Cash <span>-$400</span><button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
export default Transaction;