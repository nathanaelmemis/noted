import { BrowserRouter, Routes, Route } from "react-router";
import { Note } from "./pages/Note";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login/Login";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
