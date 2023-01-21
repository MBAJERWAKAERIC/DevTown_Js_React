import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import Note from "./Components/Note";

var React = require("react");

function App() {
  return (
    <div>
      <Heading />
      <Note />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
