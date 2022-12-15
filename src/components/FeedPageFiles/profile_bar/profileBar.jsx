import "./profileBar.css";

const ProfileBar = ({ mainData }) => {
  return (
    <>
      <div className="main-div-profilebar mb-2 d-flex flex-column ">
        <div className="main-div-profilebar-background">
          <img
            src="/assets/profile-background-default.png"
            alt="profile background"
          />
        </div>
        <div className="profile-img-feed d-flex justify-content-center">
          <img src={mainData.image} alt="profile img" />
        </div>

        <div className="mt-1">
          <div className="d-flex justify-content-center nameAndSurname">
            {mainData.name} {mainData.surname}
          </div>
          <div className="d-flex justify-content-center myTitle">
            {mainData.title}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 myArea">
          {mainData.area}
        </div>
        <div className="d-flex justify-content-center myEmail">
          {mainData.email}
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
