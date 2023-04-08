import {useState} from 'react';
import './MyForm.css';

const MyForm = (props) => {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [errors, setErrors] = useState({});
    
    const nameChangeHandler = (event) => {    
        setName(event.target.value);
    }

    const ageChangeHanlder = (event) => { 
        setAge(event.target.value);
    }

    const submitClickHanlder = (event) => {
        event.preventDefault();
        const employee = {
            Name: Name,
            Age: Age
        }

        let errors = {};
        if (Name === '') {
            errors.Name = 'First Name is required';
        }
        if (Age === '') {
            errors.Age = 'Age is required';
        } else if (isNaN(Age)) {
            errors.age = 'Age must be a number';
        }
        setErrors(errors);
        if(errors && Object.keys(errors).length === 0) {
            props.onSubmitEmployee(employee);
        }
    }


    
    return (
        <div>
            <h3>TODO Form</h3>
            <form >
                <label>First Name</label>
                <input type="text" name="firstname" onChange={nameChangeHandler} />
                {errors.Name && <div>{errors.Name}</div>}
                <label>Age</label>
                <input type="text" name="age" onChange={ageChangeHanlder}/>     
                {errors.Age && <div>{errors.Age}</div>}           
                <button type="submit" onClick={submitClickHanlder}>Submit</button>
            </form>
        </div>
    );
}

export default MyForm;