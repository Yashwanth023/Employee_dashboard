// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Employees.css';

// const Employees = () => {
//     const [employees, setEmployees] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchEmployees = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/employees');
//                 setEmployees(response.data);
//             } catch (error) {
//                 console.error('Error fetching employees', error);
//                 setError('Failed to fetch employees');
//             }
//         };

//         fetchEmployees();
//     }, []);

//     return (
//         <div className="employees-list">
//             <h2>Employees List</h2>
//             {error ? <p>{error}</p> : null}
//             <ul>
//                 {employees.length > 0 ? employees.map(employee => (
//                     <li key={employee._id}>
//                         <p>Name: {employee.f_Name}</p>
//                         <p>Address: {employee.f_Address}</p>
//                         <p>Phone: {employee.f_Phone}</p>
//                         <p>Email: {employee.f_Email}</p>
//                         <p>Date of Joining: {new Date(employee.f_DateOfJoining).toLocaleDateString()}</p>
//                     </li>
//                 )) : <p>No employees found</p>}
//             </ul>
//         </div>
//     );
// };

// export default Employees;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './Employees.css';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newEmployee, setNewEmployee] = useState({
        f_Name: '',
        f_Address: '',
        f_Phone: '',
        f_Email: '',
        f_DateOfJoining: ''
    });

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees', error);
                setError('Failed to fetch employees');
            }
        };

        fetchEmployees();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/employees', newEmployee);
            setEmployees([...employees, response.data]);
            setModalIsOpen(false);
            setNewEmployee({
                f_Name: '',
                f_Address: '',
                f_Phone: '',
                f_Email: '',
                f_DateOfJoining: ''
            });
        } catch (error) {
            console.error('Error updating employee list', error);
        }
    };

    return (
        <div className="employees-list">
            <h2>Employees List</h2>
            {error ? <p>{error}</p> : null}
            <ul>
                {employees.length > 0 ? employees.map(employee => (
                    <li key={employee._id}>
                        <p>Name: {employee.f_Name}</p>
                        <p>Address: {employee.f_Address}</p>
                        <p>Phone: {employee.f_Phone}</p>
                        <p>Email: {employee.f_Email}</p>
                        <p>Date of Joining: {new Date(employee.f_DateOfJoining).toLocaleDateString()}</p>
                    </li>
                )) : <p>No employees found</p>}
            </ul>
            <button onClick={() => setModalIsOpen(true)}>Update Employee List</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Update Employee List</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Name:
                        <input type="text" name="f_Name" value={newEmployee.f_Name} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="f_Address" value={newEmployee.f_Address} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="f_Phone" value={newEmployee.f_Phone} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="f_Email" value={newEmployee.f_Email} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Date of Joining:
                        <input type="date" name="f_DateOfJoining" value={newEmployee.f_DateOfJoining} onChange={handleInputChange} required />
                    </label>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setModalIsOpen(false)}>Close</button>
                </form>
            </Modal>
        </div>
    );
};

export default Employees;
