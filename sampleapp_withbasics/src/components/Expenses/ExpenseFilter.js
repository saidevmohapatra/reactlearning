import React, { useState, useEffect } from 'react';
import './ExpenseFilter.css';
const ExpenseFilter = (props) => {

    const onSelectHanlder = (event) => {
        props.onExpenseFilterSelect(event.target.value);     
    }

    useEffect(() => {
        console.log(props.selectedVal);
    }, [props.selectedVal]);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value = {props.selectedVal} onChange ={onSelectHanlder}>
                    <option value='0'>Select Date</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;