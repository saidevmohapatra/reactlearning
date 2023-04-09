import './ExerciseComponent.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Shared/Card';

// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!
function ExerciseComponent({ date, title, amount }) {
    return (
        <Card className='expense-item'>
            <ExpenseDate dateVal={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </Card>
    );
}

export default ExerciseComponent;