// import React, { useState } from "react";
// import "../css/workout-info-card.css";
// import { useMutation } from "@apollo/client";
// import { ADD_PHOTO } from "../../utils/mutations";

// import {
//   AiOutlineRise,
//   AiOutlineMenu,
//   AiOutlineShareAlt,
// } from "react-icons/ai";

// import { IconContext } from "react-icons";

// function ImageUpload({ photo }) {
//   const [postImage, setPostImage] = useState({ myFile: "" });

//   const createPost = async (newImage) => {
//     try {
//       // await axios.post(url, newImage)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const [addPhoto, { error, data }] = useMutation(ADD_PHOTO);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     createPost(postImage);
//     console.log("Uploaded");

//     try {
//       console.log(postImage);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertToBase64(file);
//     console.log(base64);
//     setPostImage({ ...postImage, myFile: base64 });
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="file-upload" className="custom-file-upload">
//           <img
//             src={
//               postImage.myFile ||
//               {
//                 /*avatar*/
//               }
//             }
//             alt=""
//           />
//         </label>

//         <input
//           type="file"
//           label="Image"
//           name="myFile"
//           id="file-upload"
//           accept=".jpeg, .png, .jpg"
//           onChange={(e) => handleFileUpload(e)}
//         />

//         <h3>Doris Wilder</h3>
//         <span>Designer</span>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ImageUpload;

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }
