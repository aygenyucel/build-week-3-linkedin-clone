import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsLinkedin, BsFillPeopleFill, BsBellFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { GiSuitcase } from "react-icons/gi";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { RxMagnifyingGlass } from "react-icons/rx";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const selector = useSelector((state) => state.profile.data);
  const [profiles, setProfiles] = useState(null);
  const [results, setResults] = useState([]);

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
        // console.log(data);
        setProfiles(data);
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

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setResults([]);
    } else {
      const value = profiles.filter(
        (user) => user.name.toLowerCase() === e.target.value.toLowerCase()
      );

      setResults(value);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="main-container-navbar">
          <div className="d-flex">
            <Navbar.Brand href="#">
              <BsLinkedin color="#0A66C2" size={34} />
            </Navbar.Brand>

            <Form className="d-flex form-input">
              <RxMagnifyingGlass size={28} color="rgba(0,0,0,0.6)" />
              <Form.Control
                type="search"
                onChange={handleChange}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">
                  <div className="menu-links">
                    <HiHome className="menu-links" size={23} />
                    <p>Home</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <div className="menu-links">
                    <BsFillPeopleFill className="menu-links" size={23} />
                    <p>My Network</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div className="menu-links">
                    <GiSuitcase className="menu-links" size={23} />
                    <p>Jobs</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div className="menu-links">
                    <RiMessage2Fill className="menu-links" size={23} />
                    <p>Messaging</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div className="menu-links">
                    <BsBellFill className="menu-links" size={23} />
                    <p>Notifications</p>
                  </div>
                </Nav.Link>

                <Nav.Link href="#">
                  <div className="menu-links">
                    <div className="profile-pic-container">
                      <img
                        className="profile-pic"
                        src={selector.image}
                        alt=""
                      />
                    </div>
                    <p>Me</p>
                  </div>
                </Nav.Link>
                <Nav.Link href="#">
                  <div className="menu-links">
                    <AiOutlineAppstore className="menu-links" size={24} />
                    <p>Work</p>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Container>
        {results
          ? results.map((element) => (
              <div className="search-box">
                <li className="d-flex mt-1">
                  <div>
                    <img
                      className="profile-pic mr-3"
                      src={element.image}
                      alt=""
                    />
                  </div>
                  {element.name} {element.surname}
                </li>
              </div>
            ))
          : ""}
      </Container>
    </>
  );
};

export default NavBar;
