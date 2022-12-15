// import { format } from "date-fns";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./experienceCard.css";

const ExperienceCard = ({ experiences }) => {
  useEffect(() => {
    console.log(experiences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="experience-card">
      <Container>
        <div className="header-card mb-3"> Experience</div>
        {experiences.map((experience, index) => {
          return (
            <>
              <Container key={experience.id}>
                <Row className="experience-row">
                  <div className="mr-2">
                    <div className="company-logo">
                      <img
                        src="/assets/company-logo-default.png"
                        alt="company logo"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column">
                      <div className="experience-info d-flex flex-column mb-2">
                        <div className="experience-role">{experience.role}</div>
                        <div className="experience-company">
                          {experience.company}
                        </div>
                        <div className="experience-date d-flex justify-content-center align-items-center">
                          <div className="experience-start-date">
                            {experience.startDate}
                          </div>
                          <div className="text-divider" />
                          <div className="experience-end-date">
                            {experience.endDate}
                          </div>
                        </div>
                      </div>
                      <div className="experience-description">
                        {experience.description}
                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
              {index + 1 !== experiences.length && <hr />}
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default ExperienceCard;
