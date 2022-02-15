import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../src/components/Card";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Card />
      </div>
    </>
  );
}

export default App;
