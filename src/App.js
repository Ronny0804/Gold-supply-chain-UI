import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import MinersForm from "./Components/MinersForm";

import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minersform" element={<MinersForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
