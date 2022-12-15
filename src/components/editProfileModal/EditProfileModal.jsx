import { Form, Modal } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEditAction } from "../../redux/actions";
import { getProfileAction } from "../../redux/actions";

const EditProfileModal = ({tim}) => {
  const selector = useSelector((state) => state.edit.currentState);
  const formerSelector = useSelector((state) => state.profile.data);
  // const [editedPost, setEditedPost] = useState("");

  const [name, setName] = useState(``);
  const [surname, setSurname] = useState(``);
  const [email, setEmail] = useState(``);
  const [bio, setBio] = useState(``);
  const [title, setTitle] = useState(``);
  const [area, setArea] = useState(``);

  const [show, setShow] = useState(tim);

  const dispatch = useDispatch();

  console.log(selector);

  const updateAction = () => {
    dispatch(updateEditAction(name, surname, bio, title, area));
    setShow(false);
    dispatch(getProfileAction());
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  }

  const handleChangeArea = (e) => {
    setArea(e.target.value);
  }


  if (show !== true) return null;
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
    //   onShow={() => setShow(true)}
      dialogClassName="modal-100w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Edit intro
        </Modal.Title>
      </Modal.Header>
      <p className="text-muted sm-txt">*Indicates required</p>
      <Modal.Body>
        <Form.Group>
          <Form.Label>First Name*</Form.Label>
          <Form.Control
            onChange={handleChangeName}
            type="text"
            placeholder="Enter first name"
            value={name}
          />
          <Form.Label>Last name*</Form.Label>
          <Form.Control
            onChange={handleChangeSurname}
            type="text"
            placeholder="Enter surname"
            value={surname}
          />
          <Form.Label>Additional name</Form.Label>
          <Form.Control type="text" placeholder="Enter nickname" />
          <hr />
          <p className="text-muted">Name pronunciation</p>
          <p>This can only be added using our mobile app</p>
            <Form.Label className="d-block text-muted">Headline*</Form.Label>
            <Form.Control onChange={handleChangeTitle} type="text" placeholder="Enter title" value={title} />
            <hr />
            <Form.Label className="d-block text-muted">Current position</Form.Label>
            <Form.Control onChange={handleChangeBio} type="text" placeholder="Enter title" value={bio} />
            <hr />
            <Form.Label className="d-block text-muted">Country/Region</Form.Label>
            <Form.Control onChange={handleChangeArea} type="text" placeholder="Enter title" value={area} />
          <Button
            variant="primary"
            className="stubborn-btn"
            onClick={() => updateAction()}
          >
            Save
          </Button>

        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};
export default EditProfileModal;

// {/* <div className="d-flex flex-column align-items-stretch justify-content-around">
// {/* <label for="first-name" className="text-muted">First Name*</label>
// <input type="text" id="first-name"></input> */}
// {/* <label for="last-name" className="text-muted"></label>
// {/* <input type="text" id="last-name">{selector.surname}</input> */}
// <label for="additional-name" className="text-muted">Additional Name</label>
// <input type="text" id="additional-name"></input>
// <hr/>
// </div>
// <p className="text-muted">Name pronunciation</p>
// <p>This can only be added using our mobile app</p>
// <hr/>
// <label for="headline-name" className="d-block text-muted">Headline*</label>
// <input type="text" id="headline-name" className="w-100"></input>
// <hr />
// <h4 className="py-0 my-0">Current position</h4>
// <hr />
// <a href="#">Add new position</a>
// <hr />
// <h4 className="py-0 my-0">Education</h4>
// <label for="school-name" className="d-block text-muted">Headline*</label>
// <DropdownButton id="dropdown-item-button">
// <Dropdown.Item as="button">Epicode</Dropdown.Item>
// <Dropdown.Item as="button">Lesser school</Dropdown.Item>
// <Dropdown.Item as="button">Another lesser school</Dropdown.Item>
// </DropdownButton>
// <a href="#" className="d-block">Add new education</a>
// <hr />
// <input type="checkbox" /><span className="text-muted">Show education in my intro</span>
// <hr />
// <div className="d-flex flex-column align-items-stretch justify-content-around">
//   <h4 className="d-block">Location</h4>

// <label for="country-region" className="text-muted">Country/Region*</label>
// <input type="text" id="country-region">{selector.area}</input>
// <hr />
// <label for="postal-code" className="text-muted">Postal code</label>
// <input type="text" id="postal-code"></input>
// <hr />
// <label for="city" className="text-muted">City*</label>
// <input type="text" id="city"></input>
// <hr/>
// <h4 className="d-block">Contact info</h4>
//   <p className="text-muted">Add or edit your profile URL, email, and more</p>
//   <hr />
//   <a href="#" className="d-block">Edit contact info</a>
//   <Button variant="primary" className="stubborn-btn" onClick={() => updateAction()}>Save</Button>
// </div> */} */}
