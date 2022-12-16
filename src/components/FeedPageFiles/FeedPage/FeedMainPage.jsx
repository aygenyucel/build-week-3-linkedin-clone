import { useState } from "react";
import { Container } from "react-bootstrap";
import CreateNewPost from "../createNewPost/CreateNewPost";
import GetPosts from "../FetchPosts/GetPosts";
import GetMyPosts from "../GetMyPosts/GetMyPosts";
import "./feedMainPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const FeedPage = () => {
  const [myPosts, setMyPosts] = useState(false);
  const handleChange = () => {
    setMyPosts(!myPosts);
  };
  return (
    <Container>
      <CreateNewPost />
      <button onClick={handleChange}>
        {myPosts ? "See all posts" : "See my posts"}
        <MdKeyboardArrowDown size={25} />
      </button>
      {myPosts ? <GetMyPosts /> : <GetPosts />}
    </Container>
  );
};

export default FeedPage;
