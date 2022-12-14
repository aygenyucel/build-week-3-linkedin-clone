import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewPostAction } from "../../../redux/actions";

const CreateNewPost = () => {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState("");

  const handleChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createNewPostAction(newPost));
    setNewPost(" ");
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>create post</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={newPost}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNewPost;
