import ProfileMainCard from "../profileMainCard/ProfileMainCard";
import SideBar from "../sidebar/SideBar";
import { Container } from "react-bootstrap";
import "./profilePage.css";
import ExperienceCard from "../experienceCard/ExperienceCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperiencesAction, getProfileAction } from "../../redux/actions";
import AboutCard from "../aboutCard/AboutCard";

const ProfilePage = () => {
  const experiencesData = useSelector((state) => state.profile.experiencesData);
  const mainData = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExperiencesAction());
    dispatch(getProfileAction());
    console.log("mainData", mainData);
    console.log("experiencesData", experiencesData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="d-flex mt-2">
        <div className="main-card-div">
          <ProfileMainCard />
          <AboutCard bio={mainData.bio} />
          <ExperienceCard experiences={experiencesData} />
        </div>

        <div className="sidebar-div">
          <SideBar />
        </div>
      </Container>
    </>
  );
};

export default ProfilePage;
