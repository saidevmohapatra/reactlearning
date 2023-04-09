import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

function App() {
  const [expenseList, setExpenseList] = useState([
    { date: new Date(2023, 3, 12), title: 'New TV', amount: 799.49,id:222 },
    { date: new Date(2022, 3, 12), title: 'New Fridge', amount: 8999.49, id:444}  
  ])
  const onSaveExpenseDataHanlder = (enteredExpenseData) => {
    const newExpenseList ={
      ...enteredExpenseData,
      id: Math.random()
    };
    setExpenseList((prevExpenseList)=>{
      return[
        ... prevExpenseList,
        newExpenseList
      ]
    });    
  }
  
  return (
    <div>
      <NewExpense onSaveExpenseData={onSaveExpenseDataHanlder}/>
      <Expenses expenses={expenseList} />
    </div>
  );
}

export default App;

interface Expense { 
  date: Date;
  title: string;
  amount: number;
  id: number;
}