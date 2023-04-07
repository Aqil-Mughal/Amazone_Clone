// import React, { useState } from "react";
// import "./Sendcard.scss";
// import TextField from "@mui/material/TextField";
// import { FaPlusCircle } from "react-icons/fa";
// import images from "./images.jpeg";
// import gift from "./gift.jpg";
// import { FaGift } from "react-icons/fa";
// import Modal from "@mui/material/Modal";
// import Card from "@mui/material/Card";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { IoMailSharp } from "react-icons/io5";
// import { ImLocation2 } from "react-icons/im";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import { BiDialpadAlt } from "react-icons/bi";
// import Typography from "@mui/material/Typography";
// import Checkbox from "@mui/material/Checkbox";
// import CheckboxIcon from "@mui/material/Checkbox";
// import Button from "@mui/material/Button";

// function Sendcard() {
//   const [open, setOpen] = useState(false);
//   const [show, setShow] = useState(false);
//   const [selectedValues, setSelectedValues] = useState([]);
//   const [isSelectedValue, setIsSelectedValue] = useState([]);
//   // console.log(selectedValues);
//   console.log(isSelectedValue);

//   // const [elements, setElements] = useState([
//   //   // List of elements to display
//   //   { id: 1 },
//   // ]);
//   // const removeElement = (id) => {
//   //   setElements((prevElements) =>
//   //     prevElements.filter((element) => element.id !== id)
//   //   );
//   // };
//   const handleCheckboxChange = (event) => {
//     const value = event.target.value;
//     setSelectedValues((prevSelectedValues) =>
//       event.target.value
//         ? [...prevSelectedValues, value]
//         : prevSelectedValues.filter(
//             (selectedValues) => selectedValues !== value
//           )
//     );
//   };
//   const handleboxChange = (event) => {
//     const value = event.target.value;
//     setIsSelectedValue((previsSelectedValue) =>
//       event.target.value
//         ? [...previsSelectedValue, value]
//         : previsSelectedValue.filter(
//             (isSelectedValue) => isSelectedValue !== value
//           )
//     );
//   };
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     bgcolor: "background.paper",
//     // boxShadow: 24,
//     border: "10px solid #FA9772",
//     borderRadius: "10px",
//     width: "50%",
//     paddingTop: 0,
//     display: "flex",
//     height: "60vh",
//   };

//   const toggleList = () => {
//     setShow(!show);
//   };

//   return (
    
//     <div className="Outer_div">
//       <div className="sendcard">
//         <h3 className="Upper_text_Confirm">Confirm Send Card</h3>
//         <div className="Container">
//           <div className="Subject">Subject:</div>
//           <div
//             style={{
//               width: "100%",
//               marginLeft: "1.8rem",
//               // border:"1px solid red",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <TextField className="Textfield" required variant="standard" />
//           </div>
//           <div className="Subject">
//             To:
//             <div className="Plus_icon1">
//               <FaPlusCircle onClick={handleClickOpen} />
//               <Modal
//                 className="modal_content"
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//                 // style={openmodal}
//               >
//                 <div className="Card_send" style={style}>
//                   <Card
//                     style={{
//                       width: "100%",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         background: "white",
//                         padding: 5,
//                         width: "100%",
//                         height: "6vh",
//                         borderBottom: "2px solid lightgrey",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "90%",
//                           textAlign: "center",
//                         }}
//                       >
//                         <p
//                           style={{
//                             fontSize: "25px",
//                             fontWeight: "bolder",
//                           }}
//                         >
//                           Send To
//                         </p>
//                       </div>
//                       <div
//                         style={{
//                           width: "10%",
//                           // border:"1px solid red",
//                         }}
//                       >
//                         <button
//                           style={{
//                             // border: "none",
//                             borderRadius: "30px",
//                             height: "30px",
//                             position: "absolute",
//                             right: 31,
//                             top: 28,
//                           }}
//                           onClick={handleClose}
//                         >
//                           x
//                         </button>
//                       </div>
//                     </div>
//                     <CardContent
//                       style={{
//                         marginTop: "10px",
//                       }}
//                     >
//                       <div onClick={toggleList}>
//                         <Stack
//                           direction="row"
//                           spacing={2}
//                           style={{
//                             alignitem: "center",
//                             borderBottom: "2px solid lightgrey",
//                             // border: "1px solid red",
//                           }}
//                         >
//                           <div
//                             style={{
//                               width: "8%",

//                               // border: "1px solid red",
//                             }}
//                           >
//                             <Avatar
//                               className="img_logo_modal"
//                               src={images}
//                               style={{
//                                 marginTop: "5px",
//                                 marginLeft: "15%",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 // border: "1px solid red",
//                               }}
//                             ></Avatar>
//                           </div>
//                           <div
//                             className="Typography"
//                             style={{
//                               width: "70%",
//                               wordBreak: "break-all",
//                             }}
//                           >
//                             <Typography
//                               className="Typography"
//                               variant="h6"
//                               gutterBottom
//                               style={{
//                                 alignitem: "center",
//                                 display: "flex",
//                                 // border: "1px solid blue",
//                               }}
//                             >
//                               Asfand butt
//                             </Typography>
//                           </div>
//                           <div>
//                             <IoIosArrowDropdown
//                               style={{
//                                 position: "absolute",
//                                 fontSize: "35px",
//                                 marginTop: "5px",
//                                 right: "25",
//                                 // border: "2px solid red",
//                               }}
//                             />
//                           </div>
//                         </Stack>
//                       </div>
//                       {show && (
//                         <div
//                           style={{
//                             paddingBottom: "14px",
//                             borderBottom: "2px solid lightgrey",
//                           }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               width: "100%",
//                               justifyContent: "center",
//                               marginTop: "20px",
//                               alignItems: "center",
//                               // border: "1px solid blue",
//                             }}
//                           >
//                             <div
//                               style={{
//                                 width: "20%",
//                                 justifyContent: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               <BiDialpadAlt
//                                 className="three_icons"
//                                 style={{
//                                   fontSize: "40px",

//                                   // border: "1px solid black",
//                                 }}
//                               />
//                             </div>
//                             <div
//                               style={{
//                                 width: "60%",
//                                 justifyContent: "center",
//                                 borderBottom: "2px solid lightgrey",
//                                 alignContent: "center",
//                               }}
//                             >
//                               <label
//                                 htmlFor="phone"
//                                 style={{
//                                   fontSize: "30px",
//                                   alignItems: "center",
//                                   height: "39px",

//                                   // border: "1px solid red",
//                                 }}
//                               >
//                                 +9237835873
//                               </label>
//                             </div>
//                             <div
//                               style={{
//                                 width: "20%",
//                                 justifyContent: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               <CheckboxIcon
//                                 sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
//                                 onChange={handleCheckboxChange}
//                               ></CheckboxIcon>
//                             </div>
//                           </div>
//                           <div
//                             style={{
//                               // border: "1px solid blue",
//                               display: "flex",
//                               width: "100%",
//                               justifyContent: "center",
//                               marginTop: "20px",
//                               alignItems: "center",
//                             }}
//                           >
//                             <div
//                               style={{
//                                 width: "20%",
//                                 justifyContent: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               <IoMailSharp
//                                 className="three_icons1"
//                                 style={{
//                                   fontSize: "40px",
//                                   // border: "1px solid black",
//                                 }}
//                               />
//                             </div>
//                             <div
//                               style={{
//                                 width: "60%",
//                                 justifyContent: "center",
//                                 alignContent: "center",
//                                 borderBottom: "2px solid lightgrey",
//                               }}
//                             >
//                               <label
//                                 htmlFor="phone"
//                                 style={{
//                                   fontSize: "30px",
//                                   alignItems: "center",
//                                   height: "39px",
//                                   // border: "1px solid red",
//                                 }}
//                               >
//                                 724@gmail.com
//                               </label>
//                             </div>
//                             <div
//                               style={{
//                                 width: "20%",
//                                 justifyContent: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               <CheckboxIcon
//                                 sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
//                                 onChange={handleCheckboxChange}
//                               ></CheckboxIcon>
//                             </div>
//                           </div>
//                           <div
//                             style={{
//                               // border: "1px solid blue",
//                               display: "flex",
//                               width: "100%",
//                               justifyContent: "center",
//                               marginTop: "20px",
//                               alignItems: "center",
//                             }}
//                           >
//                             <div
//                               style={{
//                                 width: "20%",
//                                 justifyContent: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               <ImLocation2
//                                 style={{
//                                   fontSize: "40px",

//                                   // border: "1px solid black",
//                                 }}
//                                 className="three_icons2"
//                               />
//                             </div>
//                             <div
//                               style={{
//                                 width: "60%",
//                                 justifyContent: "center",
//                                 alignContent: "center",
//                                 borderBottom: "2px solid lightgrey",
//                               }}
//                             >
//                               <label
//                                 htmlFor="phone"
//                                 style={{
//                                   fontSize: "30px",
//                                   alignItems: "center",
//                                   height: "39px",
//                                   // border: "1px solid red",
//                                 }}
//                               >
//                                 Lahore
//                               </label>
//                             </div>
//                             <div
//                               style={{
//                                 width: "20%",
//                                 justifyContent: "center",
//                                 textAlign: "center",
//                               }}
//                             >
//                               <Checkbox
//                                 sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
//                                 onChange={handleboxChange}
//                               ></Checkbox>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                       <div
//                         style={{
//                           width: "100%",
//                           // border:"2px solid red",
//                         }}
//                       >
//                         <Button
//                           style={{
//                             width: "100%",
//                             borderRadius: "5px",
//                             height: "3rem",
//                             position: "absolute",
//                             bottom: "0px",
//                             right: "0px",
//                             backgroundColor: "#3F6161",
//                           }}
//                           variant="contained"
//                           onClick={handleClose}
//                         >
//                           Next & Preview
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </Modal>
//             </div>
//           </div>
//           <div className="box" required>
//             {selectedValues.map((selectedValues, index) => (
//               <div className="inner_box" key={index}>
//                 <img src={images} className="mini_img_logo" alt="boy"></img>
//                 <div className="selected_number">{selectedValues}</div>
//                 {isSelectedValue.map((isSelectedValue, index) => (
//                   <div className="selected_email" key={index}>
//                     {isSelectedValue}
//                   </div>
//                 ))}
//                 <div className="selected_location"></div>
//               </div>
//             ))}
//           </div>
//           <div className="Subject">
//             From:
//             <div className="Plus_icon1">
//               <FaPlusCircle />
//             </div>
//           </div>
//           <div className="box">
//             <div className="inner_box">
//               <img src={images} className="mini_img_logo"></img>
//               <div className="selected_number">Num</div>
//               <div className="selected_email">Email</div>
//               <div className="selected_location">Location</div>
//             </div>
//           </div>
//         </div>
//         <div className="img_container">
//           <img className="img1" src={gift}></img>
//         </div>
//         <div className="Gift_button">
//           <button className="Gift_text">
//             <div className="gift_icon">
//               <FaGift />
//             </div>
//             Add Gift Items
//           </button>
//         </div>
//         <div>
//           <button className="Next_button">Next & Preview</button>
//         </div>
//       </div>
//     </div>
  
//   );
// }

// export default Sendcard;
