import Fruits from "./Fruits";
import Item from "./Item";
import Mailbox from "./Mailbox";

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <Item isDone={true} />
      <Item isDone={false} />
      <Mailbox unreadMessage={["hi", () => {}]} />
      <Mailbox unreadMessage={[]} />
      {/* <Fruits fruits={["Apple"]} />
      <Fruits fruits={[]} /> */}
      {fruits.length > 0 && <Fruits fruits={fruits} />}
    </div>
  );
}

export default App;
