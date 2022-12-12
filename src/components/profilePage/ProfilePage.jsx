import { Col, Container, Row } from "react-bootstrap";
import ProfileMainCard from "../profileMainCard/ProfileMainCard";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ProfileMainCard />
        </Col>
      </Row>
    </Container>
  );
};
export default ProfilePage;
