import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";
const listEmployees = () => axios.get(REST_API_BASE_URL);
const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

const EmployeeService = {
  listEmployees,
  createEmployee,
};

export default EmployeeService;
