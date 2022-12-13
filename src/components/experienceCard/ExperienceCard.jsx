import { Col, Container, Row } from "react-bootstrap";
import "./experienceCard.css";

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <Container>
        <div className="header-card mb-3"> Experience</div>
        <Container>
          <Row className="experience-row">
            <div className="mr-2">
              <div className="company-logo">
                <img src="assets/company-logo-default.png" alt="company logo" />
              </div>
            </div>
            <div>
              <div className="d-flex flex-column">
                <div className="experience-info d-flex flex-column mb-2">
                  <div className="experience-role">Software Engineer</div>
                  <div className="experience-company">YouTube</div>
                  <div className="experience-date d-flex justify-content-center align-items-center">
                    <div className="experience-start-date">2019-06-16</div>
                    <div className="text-divider" />
                    <div className="experience-end-date">2020-02-12</div>
                  </div>
                </div>
                <div className="experience-description">Doing Stuff</div>
              </div>
            </div>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row className="experience-row">
            <div className="mr-2">
              <div className="company-logo">
                <img src="assets/company-logo-default.png" alt="company logo" />
              </div>
            </div>
            <div>
              <div className="d-flex flex-column">
                <div className="experience-info d-flex flex-column mb-2">
                  <div className="experience-role">Software Engineer</div>
                  <div className="experience-company">YouTube</div>
                  <div className="experience-date d-flex justify-content-center align-items-center">
                    <div className="experience-start-date">2019-06-16</div>
                    <div className="text-divider" />
                    <div className="experience-end-date">2020-02-12</div>
                  </div>
                </div>
                <div className="experience-description">Doing Stuff</div>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default ExperienceCard;
