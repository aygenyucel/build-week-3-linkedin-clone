import React from "react";
import "./sidebar.css";
import { Col, Container, Row } from "react-bootstrap";
import { QuestionCircleFill } from "react-bootstrap-icons";
import { SendFill } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [profiles, setProfiles] = useState(null);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
    },
  };
  const fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        const slicedData = data.slice(60, 70);
        setProfiles(slicedData);
        console.log(profiles);
        // console.log(data);
        // console.log(profiles);
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <Container className="sidebar-right">
      <div className="content-div1">
        <Col className="content-Col">
          <Row className="content-Row">
            <p className="mt-3">
              Edit public profile & URL <QuestionCircleFill />
            </p>
          </Row>
          <div className="trans-line"></div>
          <Row className="content-Row">
            <p className="mt-3">
              Add profile in another language <QuestionCircleFill />
            </p>
          </Row>
        </Col>
      </div>
      <div className="viewer-profiles">
        <Col className="pl-2">
          <p className="text-dark font-w-bold">People also viewed</p>
          {profiles?.map((profile) => {
            return (
              <>
                <Link to={`/profile/${profile._id}`}>
                  <div
                    className="viewers d-flex flex-column pt-0 mb-3"
                    key={profile._id}
                  >
                    <div className="d-flex ">
                      <div className="viewer-picture">
                        <img
                          className="linkedin-user-image pro-pic br-100"
                          src={profile.image}
                          alt="pro-pic"
                          width={60}
                          height={60}
                        />
                      </div>

                      <div className="viewer-job-description">
                        <a href={`/profile/${profile._id}`}>
                          <div className=" ml-2">
                            <p className="align-top pt-0 mb-1 bigger-font">
                              {profile.name} {profile.surname}
                            </p>
                            <p className="text-secondary">{profile.title}</p>
                            <p className="text-secondary"> {profile.area}</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <span className="align-self-center">
                      <button className="message mt-3 opaque-much">
                        <SendFill className="plus-icon opaque-much" /> Message
                      </button>
                    </span>
                  </div>
                </Link>
              </>
            );
          })}
        </Col>
      </div>
      <hr className="horizontal-row" />
    </Container>
  );
};
export default SideBar;
