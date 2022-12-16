import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateNewPost from "../createNewPost/CreateNewPost";
import GetPosts from "../FetchPosts/GetPosts";
import GetMyPosts from "../GetMyPosts/GetMyPosts";
import "./feedMainPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import RightSideBar from "../rightSideBar/RightSideBar";

const FeedMainPage = () => {

  const [myPosts, setMyPosts] = useState(false);
  const handleChange = () => {
    setMyPosts(!myPosts);
  };
  return (
    <Container>
      <Row>
        <Col xs={8}>

      <CreateNewPost />
      <button onClick={handleChange}>
        {myPosts ? "See all posts" : "See my posts"}
        <MdKeyboardArrowDown size={25} />
      </button>
      {myPosts ? <GetMyPosts /> : <GetPosts />}

      </Col>
      <Col xs={4}>
      <RightSideBar />
      </Col>
      </Row>
    </Container>
  );
};

export default FeedMainPage;
