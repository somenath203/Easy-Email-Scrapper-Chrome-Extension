import { HashRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Result from "./pages/Result";


const App = () => {
  return (
    <HashRouter>

      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="/result" element={<Result />} />

      </Routes>

    </HashRouter>
  )
};

export default App;