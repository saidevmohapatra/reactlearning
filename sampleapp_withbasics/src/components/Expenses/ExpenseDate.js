import './ExpenseDate.css'
const ExpenseDate = ({ dateVal }) => {
    return (
        <div className="expense-date">
            <div className="expense-date__month">{dateVal.toLocaleString('en-US', { month: 'long' })}</div>
            <div className="expense-date__year">{dateVal.getFullYear()}</div>
            <div className="expense-date__day">{dateVal.toLocaleString('en-US', { day: '2-digit' })}</div>
        </div>
    );
}
export default ExpenseDate;