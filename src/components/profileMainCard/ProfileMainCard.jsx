import { Button, Col, Container, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import "./profileMainCard.css";

const ProfileMainCard = ({ mainData }) => {
  return (
    <div className="profile-main-card mb-4">
      <div className="profile-main-card-background">
        <img
          src="/assets/profile-background-default.png"
          alt="profile background"
        />
        <div className="profile-img">
          <img src={mainData.image} alt="profile img" />
        </div>
      </div>
      <div className="profile-main-card-bottom">
        <Container className="profile-main-card-middle mb-4">
          <div className="d-flex justify-content-end align-items-end">
            <div className="edit-icon bell-icon">
              <FiEdit2 />
            </div>
          </div>
        </Container>
        <Container className="profile-main-card-info">
          <Row>
            <Col xs={8}>
              <div className="main-info d-flex flex-column">
                <div className="profile-name">
                  {mainData.name} {mainData.surname}
                </div>
                <div className="profile-about mb-2">{mainData.title}</div>
                <div className="profile-details d-flex align-items-center mb-2">
                  <div className="profile-location mr-2">{mainData.area}</div>
                  <div className="profile-contact-info-btn d-flex align-items-center">
                    <a href="/">Contact info</a>
                    {/* <a href="/">{mainData.email}</a> */}
                  </div>
                </div>
                <div className="profile-connections mb-2">
                  <a href="/">
                    <span className="connections-number">96</span> Connections{" "}
                  </a>
                </div>
                <div className="profile-buttons d-flex">
                  <div className="mr-2">
                    <Button className="open-to-btn">Open to</Button>
                  </div>
                  <div className="mr-2">
                    <Button className="add-profile-section-btn">
                      Add profile section
                    </Button>
                  </div>
                  <div className="mr-2">
                    <Button className="more-btn">More</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="company-info d-flex align-items-center">
                <div className="company-logo mr-2">
                  <img
                    src="/assets/company-logo-default.png"
                    alt="company-logo"
                  />
                </div>
                <div className="company-name d-flex ">Dundler Mifflin</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProfileMainCard;
