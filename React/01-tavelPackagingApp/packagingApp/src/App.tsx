import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ListItemGenerator from "./Components/listItemGenerator/lig";

function App() {
  return (
    <div className="App">
      <Header />
      <ListItemGenerator />
      <Footer />
    </div>
  );
}

export default App;
