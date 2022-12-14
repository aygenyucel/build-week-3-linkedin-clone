// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/profilePage/ProfilePage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/NavBar/NabVabarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfilePage from "./components/userProfilePage/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/:id" element={<UserProfilePage />} />
          {/* <ProfilePage /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
