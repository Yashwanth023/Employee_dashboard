// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Dashboard.css';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const [employees, setEmployees] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchEmployees = async () => {
//             try {
//                 const res = await axios.get('http://localhost:5000/api/employees');
//                 setEmployees(res.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//         fetchEmployees();
//     }, []);

//     const handleEmployeesListClick = () => {
//         navigate('/employees');
//     };

//     return (
//         <div>
//             <h1>Welcome Admin Panel</h1>

//             <div className="dashboard">
//             <div className="sidebar">
//                 <button onClick={handleEmployeesListClick}>Employees List</button>
//             </div>
//             <div className="content">
//                 <h2>Dashboard</h2>
//                 {/* Other dashboard content */}
//             </div>
//         </div>
//             <ul>
//                 {employees.map((employee) => (
//                     <li key={employee.f_Id}>{employee.f_Name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Dashboard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleEmployeesListClick = () => {
        navigate('/employees');
    };

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h1 style={ {textAlign: 'center'}}>Welcome!!! to Admin Pannel</h1>

                <button onClick={handleEmployeesListClick}>Employees List</button>
            </div>
            <div className="content">
                <h2>Dashboard</h2>
                <h2>Admin</h2>
                <h2>Users</h2>
                <h2>Employees</h2>
                <h2>Profile</h2>
                <h2>Settings</h2>
                <h2>Logout</h2>

                {/* Other dashboard content */}
            </div>
        </div>
    );
};

export default Dashboard;
