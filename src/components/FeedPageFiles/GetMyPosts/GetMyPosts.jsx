import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeedPostsAction,
  deletePostAction,
  editPostAction,
} from "../../../redux/actions";

import { Container, Button, Modal, Form } from "react-bootstrap";

const GetMyPosts = () => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //modal

  const [editedPost, setEditedPost] = useState("");

  const dispatch = useDispatch();
  const feedPosts = useSelector((state) => state.feedPosts.feedPosts);

  useEffect(() => {
    dispatch(getFeedPostsAction());
  }, []);
  const myPostsList = feedPosts.filter(
    (element) => element.username === "Raul"
  );
  console.log(myPostsList);
  const handleChange = (e) => {
    setEditedPost(e.target.value);
  };
  return (
    <Container>
      {myPostsList.map((element) => (
        <div key={element._id}>
          <p className="mt-5">{element.text}</p>
          <p>
            <button className="mr-2" onClick={deletePostAction(element._id)}>
              DELETE POST
            </button>
            <Button variant="primary" onClick={handleShow}>
              EDIT POST
            </Button>
          </p>
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    value={editedPost}
                    placeholder={element.text}
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={
                    (handleClose, editPostAction(element._id, editedPost))
                  }
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      ))}
    </Container>
  );
};

export default GetMyPosts;
