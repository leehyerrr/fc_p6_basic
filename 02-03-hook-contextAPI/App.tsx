import { MyComponent, MyProvider } from "./MyComponent";
import Test from "./Test";
import { ThemeComponent, ThemeProvider } from "./Theme";
import { ThemeComponent2, ThemeProvider2 } from "./Theme2";

// function App() {
//   const user = {
//     name: "chelsu",
//   };
//   return (
//     <div>
//       <Parent user={user} />
//       <Test />
//     </div>
//   );
// }

// function Parent({ user }) {
//   return (
//     <div>
//       <Child user={user} />
//     </div>
//   );
// }

// function Child({ user }) {
//   return <div>{user.name}</div>;
// }

// function App() {
//   return (
//     <div>
//       <MyProvider>
//         <MyComponent />
//       </MyProvider>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ThemeProvider>
//         <ThemeComponent />
//       </ThemeProvider>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <ThemeProvider2>
        <ThemeComponent2 />
      </ThemeProvider2>
    </div>
  );
}

export default App;
