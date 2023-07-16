import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import "./styles/app.css"

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <HomePage />
      </div>
    </AnimatePresence>
  );
}

export default App;
