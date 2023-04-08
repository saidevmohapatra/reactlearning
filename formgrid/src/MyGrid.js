import './MyGrid.css'
const MyGrid = (props) => {
    return (
        <div>
            <h3>TODO Grid</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employees.map(employee => (
                            <tr key={Math.random()}>
                                <td>{employee.Name}</td>
                                <td>{employee.Age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MyGrid;