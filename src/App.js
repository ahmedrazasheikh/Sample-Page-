import Banner from "./Components/Banner/Banner";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Home/>} />

     
     {/* <Banner/> */}
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
