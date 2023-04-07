import React, { useState, useEffect } from "react";
import "./Sc.scss";
import { Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FaPlusCircle } from "react-icons/fa";
import images from "./images.jpeg";
import { FaGift } from "react-icons/fa";
import gift from "./gift.jpg";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { BiDialpadAlt } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Checkbox from "@mui/material/Checkbox";
function Sc() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const toggleList = () => {
    setShow(!show);
  };
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    width: "100%",
  };
  const style = {
    transform: "translate(70%, 30%)",
    bgcolor: "background.paper",
    border: "10px solid #FA9772",
    borderRadius: "10px",
    width: "40%",
    display: "flex",
    height: "60vh",
  };

  const handleCheckboxchange = (event, index, value) => {
    // const index = e.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      let val = event.target.value;
      console.log("value", val);
      // const data = personInfo.find((item) => item.index === index);
      setSelectedItems([...selectedItems, index]);
    } else {
      selectedItems.filter((selectedIndex) => selectedIndex !== index);
      // const newData = selectedItems.filter((item) => item.index !== index);
      // setSelectedItems(newData);
    }
  };
  const [personInfo, setPersonInfo] = React.useState([
    {
      name: "Asfand",
      email: "t1@gmail.com",
      details: [
        {
          icon: <MailOutlineIcon />,
          email: "t1@gm",
          checked: false,
        },
        {
          icon: <BiDialpadAlt />,
          number: "2349073",
          checked: false,
        },
        {
          icon: <ImLocation2 />,
          location: "lhr",
          checked: false,
        },
      ],
    },
    {
      name: "Adeel",
      details: [
        {
          icon: <MailOutlineIcon />,
          email: "t1@gm",
          checked: false,
        },
        {
          icon: <BiDialpadAlt />,
          number: "45476",
          checked: false,
        },
        {
          icon: <ImLocation2 />,
          location: "lhr",
          checked: false,
        },
      ],
    },
    {
      name: "Noman",
      details: [
        {
          icon: <MailOutlineIcon />,
          email: "t1@gm",
          checked: false,
        },
        {
          icon: <BiDialpadAlt />,
          number: "382975936",
          checked: false,
        },
        {
          icon: <ImLocation2 />,
          location: "lhr",
          checked: false,
        },
      ],
    },
  ]);
  //new Code
  // const handleChangeTrue = (event, change) => {
  //   console.log(event, change);
  // };
  const handleChange = (index, i) => {
    console.log(index,i )

    personInfo[index].details[i].checked =
      !personInfo[index]?.details[i]?.checked;

    setPersonInfo([...personInfo]);
};
  //   console.log(personInfo[index].details[i].checked);

  //   personInfo[index].details[i].checked =
  //     !personInfo[index].details[i].checked;

  //   setPersonInfo([...personInfo]);
  // };
  // console.log(personInfo);
  // const handleCheckboxChange = (event) => {
  //   const value = event.target.value;
  //   setSelectedValues((prevSelectedValues) =>
  //     event.target.value
  //       ? [...prevSelectedValues, value]
  //       : prevSelectedValues.filter(
  //           (selectedValues) => selectedValues !== value
  //         )
  //   );
  // };
  return (
    <>
      <Box className="Send_card">
        <Box className="Card_content">
          <Typography variant="h6">confirm send card</Typography>
          <Typography className="subject">Subject</Typography>
          <TextField variant="standard" className="Text_field"></TextField>
          <Typography className="To_div">
            To:
            <div>
              <FaPlusCircle onClick={handleClickOpen} />
              <Modal
                className="modal_content"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // style={openmodal}
              >
                <div className="Card_send" style={style}>
                  <Card
                    style={{
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        background: "white",
                        padding: 5,
                        width: "100%",
                        borderBottom: "2px solid lightgrey",
                      }}
                    >
                      <div
                        style={{
                          width: "90%",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "25px",
                            fontWeight: "bolder",
                          }}
                        >
                          Send To
                        </p>
                      </div>
                      <div
                        style={{
                          width: "10%",
                        }}
                      >
                        <button
                          style={{
                            borderRadius: "30px",
                            height: "30px",
                            position: "absolute",
                            right: 31,
                            top: 28,
                          }}
                          onClick={handleClose}
                        >
                          x
                        </button>
                      </div>
                    </div>
                    {personInfo?.map((item, index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          style={{ display: "flex" }}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Avatar
                            className="img_logo_modal"
                            src={images}
                          ></Avatar>
                          <Typography style={{ marginLeft: "10px" }}>
                            {item?.name}
                          </Typography>
                        </AccordionSummary>
                        {item.details.map((details, i) => (
                          <AccordionDetails
                            key={i}
                            style={{
                              width: "100%",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div
                                style={{
                                  width: "20%",
                                  justifyContent: "center",
                                  textAlign: "center",
                                  alignmentBaseline: "baseline",
                                }}
                              >
                                {details.icon}
                              </div>
                              <div
                                style={{
                                  width: "60%",
                                  borderBottom: "2px solid lightgrey",
                                }}
                              >
                                <label
                                  htmlFor="phone"
                                  style={{
                                    fontSize: "30px",
                                  }}
                                >
                                  {details.number}
                                  {details.email}
                                  {details.location}
                                </label>
                              </div>
                              <div
                                style={{
                                  width: "20%",
                                  textAlign: "center",
                                }}
                              >
                                <Checkbox
                                  // onChange={(event) =>
                                  //   handleChangeTrue(item, event.target.value)
                                  // }
                                  onChange={(e) =>
                                    handleChange(index, i)
                                  }
                                />
                              </div>
                            </div>
                          </AccordionDetails>
                        ))}
                      </Accordion>
                    ))}

                    <div
                      style={{
                        width: "100%",
                        // border:"2px solid red",
                      }}
                    >
                      <Button
                        style={{
                          width: "100%",
                          borderRadius: "5px",
                          height: "3rem",
                          position: "absolute",
                          bottom: "0px",
                          right: "0px",
                          backgroundColor: "#3F6161",
                        }}
                        variant="contained"
                        onClick={handleClose}
                      >
                        Next & Preview
                      </Button>
                    </div>
                  </Card>
                </div>
              </Modal>
            </div>
          </Typography>
          <Box
            className="border_bottom"
            sx={{ ...commonStyles, borderBottom: 1 }}
          >
            <div
              className="box"
              value={selectedItems.index}
              // onChange={() => handleChange}
            >
              {personInfo.map((items, index) =>
                items?.details.map((details, i) =>
                details.checked ? (
                    <>
                      <div className="inner_box" key={i}>
                        <img src={images} className="mini_img_logo"></img>
                        <div className="selected_number">{items?.number}</div>
                        <div className="selected_email">{items?.email}</div>
                        <div className="selected_location">
                          {items?.location}
                        </div>
                      </div>
                    </>
                  ) : null
                )
              )}
            </div>
          </Box>

          <Typography className="To_div">
            From:
            <div>
              <FaPlusCircle onClick={handleClickOpen} />
            </div>
          </Typography>
          <Box
            className="border_bottom"
            sx={{ ...commonStyles, borderBottom: 1 }}
          >
            <div className="box">
              <div className="inner_box">
                <img src={images} className="mini_img_logo"></img>
                <div className="selected_number">Num</div>
                <div className="selected_email">Email</div>
                <div className="selected_location">Location</div>
              </div>
            </div>
          </Box>
          <div className="img_container">
            <img className="img1" src={gift}></img>
          </div>
          <div className="Gift_button">
            <button className="Gift_text">
              <div className="gift_icon">
                <FaGift />
              </div>
              Add Gift Items
            </button>
          </div>
          <div>
            <button className="Next_button">Next & Preview</button>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Sc;

{
  /* <CheckboxIcon
                                sx={{
                                  "& .MuiSvgIcon-root": { fontSize: 32 },
                                }}
                                // onChange={(event) => (
                                // handleCheckboxChange
                                //   event, handleCheckboxchange(event, item)
                                // )}
                                // onChange={(event) =>
                                //   handleChangeTrue(item, event.target.value)
                                // }
                                // checked={selectedItems.includes(item.num)}
                              ></CheckboxIcon> */
}
{
  /* <AccordionDetails
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                width: "20%",
                                justifyContent: "center",
                                textAlign: "center",
                                alignmentBaseline: "baseline",
                              }}
                            >
                              <MailOutlineIcon
                                className="three_icons1"
                                style={{
                                  fontSize: "45px",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                width: "60%",
                                borderBottom: "2px solid lightgrey",
                              }}
                            >
                              <label
                                htmlFor="phone"
                                style={{
                                  fontSize: "30px",
                                }}
                              >
                                {item?.email}
                              </label>
                            </div>
                            <div
                              style={{
                                width: "20%",
                                textAlign: "center",
                              }}
                            >
                              <CheckboxIcon
                                sx={{
                                  "& .MuiSvgIcon-root": { fontSize: 32 },
                                }}
                                onChange={(event) =>
                                  handleChangeTrue(item, event)
                                }
                              ></CheckboxIcon>
                            </div>
                          </div>
                        </AccordionDetails>
                        <AccordionDetails
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                width: "20%",
                                justifyContent: "center",
                                textAlign: "center",
                                alignmentBaseline: "baseline",
                              }}
                            >
                              <ImLocation2
                                className="three_icons1"
                                style={{
                                  fontSize: "45px",
                                }}
                              />
                            </div>
                            <div
                              style={{
                                width: "60%",
                                borderBottom: "2px solid lightgrey",
                              }}
                            >
                              <label
                                htmlFor="phone"
                                style={{
                                  fontSize: "30px",
                                }}
                              >
                                {item?.loc}
                              </label>
                            </div>
                            <div
                              style={{
                                width: "20%",
                                textAlign: "center",
                              }}
                            >
                              <CheckboxIcon
                                sx={{
                                  "& .MuiSvgIcon-root": { fontSize: 32 },
                                }}
                                // onChange={(event) =>
                                //   handleChangeTrue(item, event)
                                // }
                                // onChange={(event) =>
                                //   handleCheckboxchange(event, Index)
                                // }
                              ></CheckboxIcon>
                            </div>
                          </div>
 </AccordionDetails> */
}
// {
//   name:aqil,
//   details:[
//     {title:'number',
//   check:false},
//   {title:'number',
//   check:true},
//   {title:'number',
//   check:false}
//   ]
// }
// const [peopleInfo, setPeopleInfo] = useState([
//   {
//     id: "",
//     name: "",
//     email: "",
//     loc: "",
//   },
// ]);

// console.log(peopleInfo)
// console.log(selectedItems);
// const handleCheckboxchange = (event, item) => {
//   // var prevSelectedItems = [...checked];
//   if (event.target.checked) {
//     setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
//     // setSelectedItems=[...checked,event.target.value];
//   } else {
//     setSelectedItems(
//       (prevSelectedItems) =>
//         prevSelectedItems.filter((selectedItem) => selectedItem !== item)
//       // prevSelectedItems.splice(checked.indexOf(event.target.value))
//     );
//   }
//   // setChecked(prevSelectedItems);
// };
// const selectedPersonInfo = personInfo.filter((person) =>
//   selectedItems.includes(person)
// );
// const myObj = {
//   num: [],
//   loc: [],
//   email: [],
// };
// const handleChange = (e) => {
//   if (!e || !e.target) {
//     return; // or throw an error, log a message, or handle the error in some other way
//   }
//   // Destructuring
//   const { value, checked } = e.target;
//   const { languages } = userinfo;

//   console.log(`${value} is ${checked}`);

//   // Case 1 : The user checks the box
//   if (checked) {
//     setUserInfo({
//       languages: [...languages, value],
//       response: [...languages, value],
//     });
//   }

//   // Case 2  : The user unchecks the box
//   else {
//     setUserInfo({
//       languages: languages.filter((e) => e !== value),
//       response: languages.filter((e) => e !== value),
//     });
//   }
// };
// const handleChange = (e) => {
//   if (!e || !e.target) {
//     return; // or throw an error, log a message, or handle the error in some other way
//   }
//   // Destructuring
//   const { value, checked } = e.target;
//   const { myObj } = userinfo;
//   if (checked) {
//     setUserInfo((prevUserInfo) => ({
//       ...prevUserInfo,
//       languages: [...myObj.languages, value],
//       response: [...myObj.response, value],
//     }));
//   } else {
//     setUserInfo((prevUserInfo) => ({
//       ...prevUserInfo,
//       languages: myObj.languages.filter((e) => e !== value),
//       response: myObj.response.filter((e) => e !== value),
//     }));
//   }
// };

// const handleCheckboxChange = (event) => {
//   const value = event.target.value;
//   setSelectedValues((prevSelectedValues) => {
//     // Check if the checkbox is checked
//     if (event.target.checked) {
//       // Filter the array to only include objects with matching numbers
//       const filteredValues = prevSelectedValues.filter((selectedValue) => {
//         return selectedValue.number === value;
//       });
//       // Return the filtered array
//       return filteredValues;
//     } else {
//       // If the checkbox is unchecked, return the original array
//       return prevSelectedValues;
//     }
//   });
// };
