import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=".movie/:id" element={<Detail />} />
        <Route path="*" element={<h1>Not Found Page</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
