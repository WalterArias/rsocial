import { useState } from "react";
import Routing from "./router/routing";
import Header from "./components/layout/Header";
function App() {
  return (
    <div className="layout">
      <Routing />
    </div>
  );
}

export default App;