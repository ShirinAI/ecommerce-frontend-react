import React, { useState, useEffect } from "react";
import { isAdminUser } from "../../services/AuthService";
import { listEmployees } from "../../services/admin/EmployeeService";

const ListEmployeesComponent = () => {
  const [employees, setEmployees] = useState([]);
  //   const navigate = useNavigate();

  const isAdmin = isAdminUser();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sortEmployyes = (criteria) => {
    let sortedEmployees = [...employees];
    switch (criteria) {
      case "salary":
        sortedEmployees.sort((a, b) => a.salary.localeCompare(b.salary));
        break;
      case "name":
        sortedEmployees.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setEmployees(sortedEmployees);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">List of employees</h2>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => sortEmployees("salary")}
              >
                Sort by Expiry Date
              </button>
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => sortEmployees("name")}
              >
                Sort by Name
              </button>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {isAdmin &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.secondName}</td>
                  <td>{employee.age}</td>
                  <td>{employee.salary}</td>
                  {/* <td>
                {isAdmin && (
                  <>
                    <button
                      className="btn btn-primary m-1"
                      onClick={() => handleUpdateemployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-info m-1"
                      onClick={() => handleViewemployee(employee.id)}
                    >
                      View
                    </button>
                  </>
                )}
                {isAdmin && (
                  <a
                    href="#"
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(employee.id, employee.category)}
                  >
                    Delete
                  </a>
                )}
              </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListEmployeesComponent;
