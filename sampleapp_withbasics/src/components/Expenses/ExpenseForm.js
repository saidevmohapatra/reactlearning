import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amout, setAmount] = useState(0);
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler =(event) =>{
        event.preventDefault();
        const newExpense = {
            date:new Date(date),
            title:title,
            amount:amout            
        }
        props.onSaveExpenseData(newExpense);
    }
    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-12-01" max="2023-12-01" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={submitHandler}>Add Expense</button>
                    <button type="button" onClick={props.cancelHandler}>Cancel Expense</button>
                </div>
            </div>            
        </form>
    )
}
export default ExpenseForm;