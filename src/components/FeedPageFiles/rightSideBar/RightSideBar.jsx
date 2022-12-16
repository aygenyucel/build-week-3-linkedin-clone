import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { getProfilesListAction } from "../../../redux/actions/index"
import { useDispatch } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./rightSideBar.css"
// import { BsInfoLg } from "react-icons/bs";

export default function RightSideBar() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.listOfProfiles.profilesList);
  
  useEffect(() => {
    dispatch(getProfilesListAction());
  }, []);

  console.log(users);
  return (
    <>
      <div
        id="thirdTop"
        style={{ backgroundColor: "white", borderRadius: "5px" }}
        className="mt-3"
      >
        <div className="pt-2 ml-2 mr-2 d-flex justify-content-between align-items-center">
          <h6 className="text-smaller font-weight-bold">Add your feed</h6>
          <h6>
            {/* <BsInfoLg /> */}
          </h6>
        </div>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3 d-flex align-items-center">
              <img
                className="mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[63]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[63]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate no-p-no-m mb-1"
              >
                {users[63]?.bio}
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="btn-connect btn-secondary text-dark transparent d-flex align-items-center message"
                id="buttons-rounded"
              >
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3 d-flex align-items-center">
              <img
                className="mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[62]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[62]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate no-p-no-m mb-1"
              >
                {users[62]?.bio}
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="btn-connect btn-secondary text-dark transparent d-flex align-items-center message"
                id="buttons-rounded"
              >
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="ml-2">
          <Row>
            <Col xs={2} className="mr-3 d-flex align-items-center">
              <img
                className="mt-3 rounded-img"
                style={{ width: "3rem" }}
                src={users[69]?.image}
                alt="..."
              />
            </Col>
            <Col xs={8}>
              <h6 className="pt-4 no-p-no-m ">{users[69]?.name}</h6>
              <p
                className="smaller-text
text-muted text-truncate no-p-no-m mb-1"
              >
                {users[69]?.bio}
              </p>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                type="button"
                className="btn-connect btn-secondary text-dark transparent d-flex align-items-center message"
                id="buttons-rounded"
              >
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </Button>
            </Col>
          </Row>
        </Col>

        <div id="recommend" className="ml-3 mt-4 pb-1">
          <a href="/#">
            <p>
              View all recommendations <FiArrowRight />
            </p>
          </a>
        </div>
      </div>
      <div id="side-footer" className="text-center mt-3">
        <Row className="right__side__footer">
          <Col xs={12}>
            <a href="/"> about </a>
            <a href="/" className="mx-2">
              accessibility
            </a>
            <a href="/"> help center </a>
          </Col>
          <Col xs={12}>
            <a href="/"> privacy & terms</a>
            <a href="/" className="mx-2">
              ad choises
            </a>
          </Col>
          <Col xs={12}>
            <a href="/"> advertising </a>
            <a href="/" className="mx-2">
              business services
            </a>
          </Col>
          <Col xs={12}>
            <a href="/"> get the linkedin app </a>
            <a href="/" className="mx-2">
              more
            </a>
          </Col>
          <Col xs={12} className="d-flex flex-row mt-3 justify-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
              className="mr-2"
              id="linkedin-logo"
              alt="Linked img"
              width={100}
              height={60}
            />

            <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </div>
    </>
  );
}