import AntFormValidation from "./components/AntFormValidation";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </>
  );
}

export default App;
