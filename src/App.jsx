import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* https://localhost:3000 */}
        <Route path="/" element={<ListEmployeeComponent />}></Route>
        {/* https://localhost:3000/employees */}
        <Route path="/employees" element={<ListEmployeeComponent />}></Route>
        {/* https://localhost:3000/add-employee */}
        <Route path="/add-employee" element={<EmployeeComponent />}></Route>
        {/* https://localhost:3000/update-employee/id */}
        <Route
          path="/update-employee/:id"
          element={<EmployeeComponent />}
        ></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </BrowserRouter>
  );
}
export default App;
