import AntFormValidation from "./components/AntFormValidation";
import AntFormValidationAllControls from "./components/AntFormValidationAllControls";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
       <Route path="/" component={IndiaMapContainer}  />
        <Route path="/about" component={About} />
    </Routes> */}
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/form" element={<AntFormValidation />} />
        <Route path="/allcontrols" element={<AntFormValidationAllControls />} />
      </Routes>
    </>
  );
}

export default App;
