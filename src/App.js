import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/profilePage/ProfilePage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/footer";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
<ProfilePage />
<sideBar />
<Footer />
    </div>
  );
}

export default App;
