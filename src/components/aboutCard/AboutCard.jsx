import { Container, Row } from "react-bootstrap";
import "./aboutCard.css";

const AboutCard = ({ bio }) => {
  return (
    <div className="about-card mb-2">
      <Container>
        <div className="header-card mb-3">About</div>
        <Container>
          <Row className="about-row">{bio}</Row>
        </Container>
      </Container>
    </div>
  );
};
export default AboutCard;
