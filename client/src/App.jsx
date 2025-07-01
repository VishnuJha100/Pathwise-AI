
import Landing from "./Pages/auth/Landing.jsx";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Toaster />

      <Routes>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
