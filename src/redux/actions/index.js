export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_ID = "GET_PROFILE_ID";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_PROFILE_USER = "GET_PROFILE_USER";
export const GET_EXPERIENCES_USER = "GET_EXPERIENCES_USER";
export const GET_PROFILES_LIST = " GET_PROFILES_LIST";
export const EDIT_PROFILE = "EDIT_PROFILE"

export const getProfileAction = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        options
      );
      if (response.ok) {
        const profileData = await response.json();
        // console.log("Get user profile:", profileData);
        dispatch({
          type: GET_PROFILE,
          payload: profileData,
        });
        dispatch({
          type: GET_PROFILE_ID,
          payload: profileData._id,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getExperiencesAction = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/5fc4baecb708c200175de89b/experiences`,
        options
      );
      if (response.ok) {
        const experiencesData = await response.json();
        // console.log("Get user profile", experiencesData);
        dispatch({
          type: GET_EXPERIENCES,
          payload: experiencesData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getUserProfileAction = (userId) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
        options
      );
      if (response.ok) {
        const userProfileData = await response.json();
        // console.log("Get another user profile", userProfileData);
        dispatch({
          type: GET_PROFILE_USER,
          payload: userProfileData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getUserExperiencesAction = (userId) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        options
      );
      if (response.ok) {
        const userExperiencesData = await response.json();
        dispatch({
          type: GET_EXPERIENCES_USER,
          payload: userExperiencesData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getProfilesListAction = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
      },
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_PROFILES_LIST,
          payload: data,
        });
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateEditAction = (name, surname, bio, title, area) => {
   
  const changedDetails = {
    name: name,
    surname: surname,
    bio: bio,
    title: title,
    area: area,
  };

  return async (dispatch) => {

    const optionPut = {
      method: 'PUT',
      body: JSON.stringify(changedDetails),
      headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
      "Content-Type": "application/json"

  }}
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        optionPut
      );
      if (response.ok) {
        let data = await response.json()
        dispatch ({
          type: EDIT_PROFILE,
        });
        alert("Profile was updated!");
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};



















// export const changeProfileDetailsAction = (details) => {
//   console.log("🚀 changeProfileDetailsAction ~ details", details);

//   return async (dispatch) => {
//     const optionsPut = {
//       method: "PUT",
//       body: JSON.stringify(details),
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAxM2M5NmRmYjAwMTUyMWE1YmEiLCJpYXQiOjE2NzA4MzYyNDMsImV4cCI6MTY3MjA0NTg0M30.y7kED45MhN6V7jWF7PwyZ4DryRe6OJ6b9-so68M-zaE",
//         "Content-Type": "application/json",
//       },
//     };
//     console.log(
//       "----------------CHANGING My Profile Details------------------"
//     );

//     try {
//       let response = await fetch(baseEndPoint, optionsPut);
//       if (response.ok) {
//         console.log("Profile Details sucessfully updated ->", response);
//       } else {
//         console.log("Error changing profile details");
//       }
//     } catch (error) {
//       console.log("🚀 error", error);
//     }
//   };
// };




//For the reducer:


// import {
//   GET_IS_FETCHED,
//   GET_MY_PROFILEDETAILS,
//   CHANGE_PROFILE_DETAILS,
// } from "../actions";

// const initialState = {
//   detailsData: [],
//   isFetched: false,
// };

// const myProfileReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_MY_PROFILEDETAILS:
//       return {
//         ...state,
//         detailsData: action.payload,
//       };
//     case GET_IS_FETCHED:
//       return {
//         ...state,
//         isFetched: action.payload,
//       };
//     case CHANGE_PROFILE_DETAILS:
//       return {
//         ...state,
//         detailsData: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default myProfileReducer;



//For the separate modal component


// import { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import { Pencil, InfoSquareFill } from "react-bootstrap-icons";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   changeProfileDetailsAction,
//   CHANGE_PROFILE_DETAILS,
// } from "../../redux/actions";

// function EditUserDetailsModal() {
//   // Modal variables
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // Fetching variables
//   let details = useSelector((state) => state.myProfile.detailsData);
//   let isFetched = useSelector((state) => state.myProfile.isFetched);
//   console.log("🚀EditUserDetails ~ details", details);
//   let dispatch = useDispatch();

//   // Changing Data via Modal submit

//   const [name, setName] = useState(`${details.name}`);
//   const [surname, setSurname] = useState(`${details.surname}`);
//   const [email, setEmail] = useState(`${details.email}`);
//   const [bio, setBio] = useState(`${details.bio}`);
//   const [title, setTitle] = useState(`${details.title}`);
//   const [area, setArea] = useState(`${details.area}`);
//   const [image, setImage] = useState(`${details.image}`);

//   const changedDetails = {
//     name: name,
//     surname: surname,
//     email: email,
//     bio: bio,
//     title: title,
//     area: area,
//     image: image,
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();

//     dispatch({
//       type: CHANGE_PROFILE_DETAILS,
//       payload: {
//         name: name,
//         startDate: surname,
//         email: email,
//         bio: bio,
//         title: title,
//         area: area,
//         image: image,
//       },
//     });

//     dispatch(changeProfileDetailsAction(changedDetails));
//     handleClose();
//   };

//   const onChangeHandler = (value, fieldToSet) => {
//     fieldToSet(value);
//   };

//   return (
//     <>
//       {/* Button Open Modal */}
//       <div
//         className="editButtonDivTwo d-flex justify-content-center align-items-center"
//         onClick={handleShow}
//       >
//         <Pencil className="text-dark" style={{ fontSize: "20px" }} />
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title style={{ color: "grey" }}>Edit intro</Modal.Title>
//         </Modal.Header>
//         {isFetched ? (
//           <Modal.Body>
//             <div className="overflow-auto">
//               <p className="lightGreyParagraph mb-4">* indicates required</p>
//               <Form style={{ color: "grey", height: "60vh" }}>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>First name*</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="First name"
//                     value={name}
//                     onChange={(e) => onChangeHandler(e.target.value, setName)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>Last name*</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Last name"
//                     value={surname}
//                     onChange={(e) =>
//                       onChangeHandler(e.target.value, setSurname)
//                     }
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <Form.Label>Name pronunciation</Form.Label>
//                   <div className="d-flex align-items-center mt-2">
//                     <InfoSquareFill className="mr-3" />
//                     <p className="mb-0">
//                       this can only be added using our mobile app
//                     </p>
//                   </div>
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>E-Mail*</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="E-Mail"
//                     value={email}
//                     onChange={(e) => onChangeHandler(e.target.value, setEmail)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>Bio*</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Bio"
//                     value={bio}
//                     onChange={(e) => onChangeHandler(e.target.value, setBio)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>Job Title*</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Current position"
//                     value={title}
//                     onChange={(e) => onChangeHandler(e.target.value, setTitle)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>Area*</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Your current city"
//                     value={area}
//                     onChange={(e) => onChangeHandler(e.target.value, setArea)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlInput1">
//                   <Form.Label>Image-Url*</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="https//:"
//                     value={image}
//                     onChange={(e) => onChangeHandler(e.target.value, setImage)}
//                   />
//                 </Form.Group>
//               </Form>
//             </div>
//           </Modal.Body>
//         ) : (
//           <Modal.Body></Modal.Body>
//         )}
//         <Modal.Footer>
//           <Button
//             variant="primary"
//             onClick={onSubmitHandler}
//             className="rounded-pill py-0"
//           >
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default EditUserDetailsModal;