import ProfileMainCard from "../profileMainCard/ProfileMainCard";
import SideBar from "../sidebar/SideBar";
import { Container } from "react-bootstrap";
import "./profilePage.css";
import ExperienceCard from "../experienceCard/ExperienceCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperiencesAction, getProfileAction } from "../../redux/actions";
import AboutCard from "../aboutCard/AboutCard";
import { useLocation, useParams } from "react-router-dom";

const ProfilePage = () => {
  const profileExperiencesData = useSelector(
    (state) => state.profile.experiencesData
  );
  const profileMainData = useSelector((state) => state.profile.data);
  const profileId = useSelector((state) => state.profile.profileId);
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const dynamicUrl = location.pathname.slice(
    location.pathname.lastIndexOf("/") + 1,
    location.pathname.length
  );

  useEffect(() => {
    dispatch(getExperiencesAction());
    dispatch(getProfileAction());
    console.log("mainData", profileMainData);
    console.log("experiencesData", profileExperiencesData);
    console.log("profileId:", profileId);
    console.log("dynamic url:", dynamicUrl);
    console.log("params.id:", params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {dynamicUrl === "me" ? (
        <Container className="d-flex mt-2">
          <div className="main-card-div">
            <ProfileMainCard />
            <AboutCard bio={profileMainData.bio} />
            <ExperienceCard experiences={profileExperiencesData} />
          </div>

          <div className="sidebar-div">
            <SideBar />
          </div>
        </Container>
      ) : (
        <div>no</div>
      )}
    </>
  );
};

export default ProfilePage;
