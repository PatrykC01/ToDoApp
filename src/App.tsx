import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Todos from "./pages/Todos.tsx";
import Contact from "./pages/Contact.tsx";
import NoPage from "./pages/NoPage.tsx";
import "./App.scss"; // Upewnijmy się, że style są zaimportowane

function App() {
  return (
    <div className="App">
      {" "}
      {/* Wrapper, aby zachować obecne style */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="todos" element={<Todos />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
