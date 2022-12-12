import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/profilePage/ProfilePage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
