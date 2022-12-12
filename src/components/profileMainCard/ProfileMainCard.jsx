import { Button, Col, Container, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import "./profileMainCard.css";

const ProfileMainCard = () => {
  return (
    <div className="profile-main-card mb-4">
      <div className="profile-main-card-background">
        <img
          src="assets/profile-background-default.png"
          alt="profile background"
        />
      </div>
      <Container className="profile-main-card-middle mb-4">
        <div className="d-flex justify-content-between align-items-end">
          <div className="profile-img">
            <img src="assets/profile-img-default.jpeg" alt="profile img" />
          </div>
          <div className="edit-icon bell-icon">
            <FiEdit2 />
          </div>
        </div>
      </Container>
      <Container className="profile-main-card-info">
        <Row>
          <Col xs={8}>
            <div className="main-info d-flex flex-column">
              <div className="profile-name">Michael Scott</div>
              <div className="profile-about mb-2">
                Regional Manager at Dundler Mifflin
              </div>
              <div className="profile-details d-flex align-items-center mb-2">
                <div className="profile-location mr-2">
                  Roanoke, Texas, United States
                </div>
                <div className="profile-contact-info-btn d-flex align-items-center">
                  <a href="/">Contact info</a>
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
                <img src="assets/company-logo-default.png" alt="company-logo" />
              </div>
              <div className="company-name d-flex ">Dundler Mifflin</div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default ProfileMainCard;
