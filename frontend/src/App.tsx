import { BrowserRouter, Routes, Route } from "react-router";
import { Note } from "./pages/Note";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
