import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlogDetail } from "./components";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
