import WelcomeMessage from "./components/WelcomeMessage";
import Counter from "./components/Counter";
import LightSwitch from "./components/LightSwitch";
import { Login } from "lucide-react";


function App() {
  return (
    <div className="App">
      <Login />
      <h1>Hello World!</h1>
      <h2>Hello React!</h2>
      <WelcomeMessage />
      <Counter />
      <LightSwitch />
    </div>
  );
}

export default App;