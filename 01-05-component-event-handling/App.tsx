import Alert from "./Alert";
import Form from "./Form";
import Propagation from "./Propagation";

function App() {
  return (
    <div>
      {/* SyntheticEvent */}
      <Alert onAlert={() => alert("Hello")} />
      <Form />
      <Propagation />
    </div>
  );
}

export default App;
