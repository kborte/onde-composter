import "./App.css";
import Header from "./components/common/header/header.jsx";
import Main from "./components/main.jsx";
import Questions from "./components/questions";
import Advs from "./components/advs";
import Composter from "./components/composter";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Main/>
        <Advs/>
        <Questions/>
        <Composter/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
