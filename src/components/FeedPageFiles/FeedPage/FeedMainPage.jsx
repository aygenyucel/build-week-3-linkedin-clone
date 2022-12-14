import { Container } from "react-bootstrap";
import CreateNewPost from "../createNewPost/CreateNewPost";
import GetPosts from "../FetchPosts/GetPosts";

const FeedPage = () => {
  return (
    <Container>
      <CreateNewPost />
      <GetPosts />
    </Container>
  );
};

export default FeedPage;
