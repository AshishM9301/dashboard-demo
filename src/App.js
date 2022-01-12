import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideBar />
        <div className=" w-full">
          <NavBar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
