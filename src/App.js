import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/profilePage/ProfilePage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
<ProfilePage />
<sideBar />
    </div>
  );
}

export default App;
