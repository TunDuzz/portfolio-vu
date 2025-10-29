import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BlogDetail } from "./components";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
