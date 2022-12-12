import ProfileMainCard from "../profileMainCard/ProfileMainCard";
import SideBar from "../sidebar/SideBar";
import { Container } from "react-bootstrap";
import "./profilePage.css";

const ProfilePage = () => {
  return (
    <>
      <Container className="d-flex mt-2">
        <div className="main-card-div">
          <ProfileMainCard />
        </div>

        <div className="sidebar-div">
          <SideBar />
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
