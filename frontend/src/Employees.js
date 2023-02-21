import React, { useState } from 'react';
import axios from 'axios';
import './Employees.css';

const Employees = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const getEmployees = () => {
    axios.get('http://localhost:5000/getEmployees').then(res => {
      console.log(res.data.employees);
      setData([]);
      setData(res.data.employees);
      setShow(true);
    })
  };

  return (
    <><div>
      <button className='getEmp' onClick={getEmployees}>Get Employees</button>
    </div>
      {show ?
        <div >
          <table className='table'>
            <thead className='thead'>
              <tr >
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone Numer</td>
                <td>Gender</td>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value, i) => {
                  return (
                    <tr key={i}>
                      <td>{value.first_name}</td>
                      <td>{value.last_name}</td>
                      <td>{value.email}</td>
                      <td>{value.mobile}</td>
                      <td>{value.gender}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        : <div></div>}

    </>
  )
}


export default Employees;