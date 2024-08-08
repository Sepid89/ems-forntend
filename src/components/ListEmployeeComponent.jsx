import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployee] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/update-employee/${id}`);
  }

  function getAllEmployees() {
    EmployeeService.listEmployees()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => console.error(error));
  }

  function deleteEmployee(id) {
    if (id) {
      EmployeeService.deleteEmployee(id)
        .then((response) => {
          console.log(response.data);
          getAllEmployees();
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="container">
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add new Employee
      </button>
      <h2 className="text-center">List of Employee</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id </th>
            <th>Employee First Name </th>
            <th>Employee Last Name </th>
            <th>Employee Email </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
