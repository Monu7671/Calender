import React, { useState } from "react";
import "./TimeSlot.css";
import EventFrom from "../EventForm/EventForm";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { Box, Divider, makeStyles, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";



function TimeSlot(props) {
  
  //DIALOG STATE CHECK
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  ///FORM DATA TRANSFER VARIBLE
  const [onClickEvent, setonClickEvent] = useState("");


  const [formValues, setformvalues] = useState({
    eventTitleValue: "",

    hrValue1: 0,
    minValue1: 0,
    ampmValue1: "",

    hrValue2: 0,
    minValue2: 0,
    ampmValue2: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setformvalues({ ...formValues, [name]: value });
  };

  const handleClick = (e) => {
    name = e.target.name;
    value = e.target.value;

    setonClickEvent(name);
  };

  // time Slot section
  var time__value = props.name;
  const hr = props.hrSlot;
  const min = props.minSlot;
  const ampm = props.ampm;

  //little bit modification in hour and min value
  var hrInterval_1 = "";

  var minInterval_1 = "30";

  if (hr % 13 < 10) {
    hrInterval_1 = "0" + hr;
  } else {
    hrInterval_1 = hr;
  }

  if (min === 0) {
    minInterval_1 = "00";
  }

  //seting time interval value

  var timeinterval__1 = hrInterval_1 + ":" + minInterval_1;

  // column manage code
  var count = props.columeCount;
  count -= 1;
  var className = "time__slot";

  if (count === 0 || count === 6) {
    if (count === 0) {
      className = "first__shell";
    } else {
      className = "last__shell";
    }
  }

  return (
    // section Time
    <div className={className}>
      {count === 0 ? (
        <div className="row__time">
          {" "}
          <p>
            {timeinterval__1} {ampm}
          </p>
        </div>
      ) : null}

      <div className="event" name="event__set">
        {/* 
      ///////////////////////// 
      //////////////////////// EVENT FORM INPUT/OUTPUT
      ///////////////////////                             ///////////////////// */}

        <div onClick={handleClickOpen}>
          <EventFrom
            title={formValues.eventTitleValue}
            hrSet1={formValues.hrValue1}
            minSet1={formValues.minValue1}
            ampmSet1={formValues.ampmValue1}
            hrSet2={formValues.hrValue2}
            minSet2={formValues.minValue2}
            ampmSet2={formValues.ampmValue2}
            color={onClickEvent}
          />
        </div>
        <>
          <Dialog onClose={handleClose} open={open} disableBackdropClick>
            <Box
              sx={{
                backgroundColor: "#fff",
                minWidth: 450,
                minHeight: 400,
                overflow: "hidden",
              }}
            >
              <DialogTitle
                sx={{
                  marginBottom: 2,
                  p: 2,
                  backgroundColor: "#fff",
                  lineHeight: "18px",
                  fontSize: "16px",
                }}
              >
                Event Details
              </DialogTitle>

              {/* Dialog Container */}
              <Box>
                <TextField
                  label="Event Title"
                  required
                  onChange={handleChange}
                  name="eventTitleValue"
                  value={formValues.eventTitleValue}
                  sx={{
                    padding: "4px 6px",
                    marginLeft: "2px",
                    maxHeight: "20px !important",
                    lineHeight: "12px",
                  }}
                  fullWidth
                  autoFocus
                />
              </Box>

              {/* EVENT TITLE */}
              <Box
                fullWidth
                sx={{
                  display: "box",
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <Typography variant="h8" fullWidth>
                  Time Interval
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <InputLabel sx={{ textAlign: "center", fontSize: "10px" }}>
                      hr
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="hrValue1"
                      value={formValues.hrValue1}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                    </Select>
                  </Box>

                  <Typography
                    variant="p"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                    }}
                  >
                    :
                  </Typography>

                  <Box>
                    <InputLabel sx={{ textAlign: "center", fontSize: "10px" }}>
                      min
                    </InputLabel>

                    <Select
                      
                      onChange={handleChange}
                      name="minValue1"
                      value={formValues.minValue1}
                    >
                      <MenuItem value={0}>00</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </Box>

                  <Box>
                    <InputLabel sx={{ textAlign: "center", fontSize: "10px" }}>
                      am/pm
                    </InputLabel>

                    <Select
                      
                      onChange={handleChange}
                      name="ampmValue1"
                      value={formValues.ampmValue1}
                    >
                      <MenuItem value={"AM"}>AM</MenuItem>
                      <MenuItem value={"PM"}>PM</MenuItem>
                    </Select>
                  </Box>

                  <Typography
                    variant="p"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                    }}
                  >
                    To
                  </Typography>
                  <Box>
                    <InputLabel sx={{ textAlign: "center", fontSize: "10px" }}>
                      hr
                    </InputLabel>

                    <Select
                      
                      onChange={handleChange}
                      name="hrValue2"
                      value={formValues.hrValue2}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                    </Select>
                  </Box>

                  <Typography
                    variant="p"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                    }}
                  >
                    :
                  </Typography>

                  <Box>
                    <InputLabel sx={{ textAlign: "center", fontSize: "10px" }}>
                      min
                    </InputLabel>

                    <Select
                  
                      onChange={handleChange}
                      name="minValue2"
                      value={formValues.minValue2}
                    >
                      <MenuItem value={0}>00</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </Box>

                  <Box>
                    <InputLabel sx={{ textAlign: "center", fontSize: "10px" }}>
                      am/pm
                    </InputLabel>

                    <Select
                      
                      placeholder="ampm"
                      onChange={handleChange}
                      name="ampmValue2"
                      value={formValues.ampmValue2}
                    >
                      <MenuItem value={"AM"}>AM</MenuItem>
                      <MenuItem value={"PM"}>PM</MenuItem>
                    </Select>
                  </Box>
                </Box>

                {/* Color Selection*/}

                <Box
                  fullWidth
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    maxHeight: "22px",
                    marginTop: "55px",
                  }}
                >
                  <button
                    
                    className="Event__button black"
                    name= "black"
                    
                    onClick={handleClick}
                    
                    
                  >
                    
                  </button>

                  <button
                    
                    className="Event__button red"
                    name= "red"
                    
                    onClick={handleClick}
                    
                    
                  >
                    
                  </button>

                  <button
                    
                    className="Event__button orange"
                    name= "orange"
                    onClick={handleClick}
                    
                    
                  >
                    
                  </button>

                  <button
                    
                    className="Event__button skyblue"
                    name= "skyblue"
                    onClick={handleClick}
                    
                    
                  >
                    
                  </button>

                  <button
                    
                    className="Event__button green"
                    name= "green"
                    onClick={handleClick}
                    
                    
                  >
                    
                  </button>
                </Box>

                <Box sx={{ position: "absolute", bottom: "5px", right: "4px" }}>
                  <Button onClick={handleClose} sx={{ color: "blue" }}>
                    Submit
                  </Button>
                  <Button onClick={handleClose} sx={{ color: "red" }}>
                    cancle
                  </Button>
                </Box>
              </Box>
            </Box>
          </Dialog>
        </>
      </div>
    </div>
  );
}

export default TimeSlot;