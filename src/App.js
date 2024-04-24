import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:iddd" element={<Detail />} />
        {/* id대신에 원하는 단어로 쓸 수 있다(변수라서 맘대로 지정 가능) */}
        <Route path="*" element={<h1>Not Found Page</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
