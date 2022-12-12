// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/profilePage/ProfilePage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/NavBar/NabVabarComponent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfilePage />
      <Footer />
    </div>
  );
}

export default App;
