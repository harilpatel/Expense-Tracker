import React, { useState } from "react";

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add New Transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.Target.value)} id="text" placeholder="Enter Text ..." />
                </div>
                <div className="form-control">
                    <label for="Amount">Amount <br />
                        (negative - Expense, positive - Income)</label>
                    <input type="Number" value={amount} onChange={(e) => setAmount(e.Target.value)} id="amount" placeholder="Enter Amount ..." />
                </div>
            </form>
        </>
    )
}

export default AddTransaction;