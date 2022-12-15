// import { format } from "date-fns";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./experienceCard.css";
import { format } from "date-fns";

const ExperienceCard = ({ experiences }) => {
  return (
    <div className="experience-card">
      <Container>
        <div className="header-card mb-2"> Experience</div>
        {experiences.map((experience, index) => {
          return (
            <Container key={experience._id}>
              <div>
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
                            {format(
                              Date.parse(experience.startDate),
                              "MMM yyyy"
                            )}
                          </div>
                          <div className="mx-2">-</div>
                          <div className="experience-end-date">
                            {format(Date.parse(experience.endDate), "MMM yyyy")}
                          </div>
                        </div>
                      </div>
                      <div className="experience-description">
                        {experience.description}
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
              {index + 1 !== experiences.length && <hr />}
            </Container>
          );
        })}
      </Container>
    </div>
  );
};

export default ExperienceCard;
