import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";
const listEmployees = () => axios.get(REST_API_BASE_URL);
const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);
const getEmployee = (employeeId) =>
  axios.get(REST_API_BASE_URL + "/" + employeeId);

const EmployeeService = {
  listEmployees,
  createEmployee,
  getEmployee,
};

export default EmployeeService;
