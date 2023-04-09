import React, { useState, useEffect } from 'react'

import Card from "../Shared/Card"
import ExerciseComponent from "./ExcersiseComponent"
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses({ expenses }) {
    console.log(expenses);
    const [selectedEFVal, setEfVal] = useState("2023");
    //const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    const expenseFilter = (allExpenses,selectedYear) => {
        return allExpenses.filter((expense) => {
            return expense.date.getFullYear().toString() === selectedYear;
        })
    }
    const handlerFilter = (selectedYear) => {
        setEfVal(selectedYear);
        //setFilteredExpenses(expenseFilter(expenses,selectedYear))
    }

    // useEffect(() => {
    //     setFilteredExpenses(expenseFilter(expenses,selectedEFVal))
    // },[expenses]);

    const filteredExpenses = expenseFilter(expenses,selectedEFVal);
    
    return (
        <Card className="expenses">
            <ExpenseFilter selectedVal={selectedEFVal} onExpenseFilterSelect={handlerFilter} />
            {
                filteredExpenses.map((expense) => {
                    return <ExerciseComponent
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                }
                )
            }
        </Card>

    )
}