import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from 'react'

const NewExpense = (props) => {

    const onSaveExpenseDataHanlder = (enteredExpenseData) => {
        props.onSaveExpenseData(enteredExpenseData);
        setShowNewExpense(false);
    }

    const [showNewExpense, setShowNewExpense] = useState(false);
    const addNewExpenseHanlder = () => {
        setShowNewExpense(true);
    }
    const cancelNewExpenseHanlder = () => {
        setShowNewExpense(false);
    }
    return (
        <>


            <div className="new-expense">
                {!showNewExpense &&
                    <div>
                        <button onClick={addNewExpenseHanlder}>Add New Expense</button>
                    </div>
                }
                {showNewExpense &&
                    <ExpenseForm cancelHandler = {cancelNewExpenseHanlder} onSaveExpenseData={onSaveExpenseDataHanlder} />
                }
            </div>

        </>
    );
}

export default NewExpense;