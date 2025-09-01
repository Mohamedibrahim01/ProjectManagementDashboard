// App.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./features/Login";
import Signup from "./features/Signup";
import { Toaster, toast } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<p>this is home</p>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
