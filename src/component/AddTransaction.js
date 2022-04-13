import React from "react";

const AddTransaction = () => {
    return (
        <>
            <h3>Add New Transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" id="text" placeholder="Enter Text ..." />
                </div>
                <div className="form-control">
                    <label for="Amount">Amount <br />
                        (negative - Expense, positive - Income)</label>
                    <input type="Number" id="amount" placeholder="Enter Amount ..." />
                </div>
            </form>
        </>
    )
}

export default AddTransaction;