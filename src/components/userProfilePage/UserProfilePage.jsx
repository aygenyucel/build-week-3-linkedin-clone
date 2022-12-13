import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserExperiencesAction } from "./../../redux/actions/index";
import ExperienceCard from "../experienceCard/ExperienceCard";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.id;
  //   const userData = useSelector((state) => state.usersProfileReducer.userData);
  const userExperiencesData = useSelector(
    (state) => state.usersProfile.userExperiencesData
  );

  useEffect(() => {
    dispatch(getUserExperiencesAction(userId));
  }, []);
  return (
    <>
      <ExperienceCard experiences={userExperiencesData} />
    </>
  );
};

export default UserProfilePage;
