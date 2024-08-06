import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div id="root" className="d-flex flex-column min-vh-100">
      <HeaderComponent />
      <main className="flex-grow-1">
        <ListEmployeeComponent />
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}
export default App;
