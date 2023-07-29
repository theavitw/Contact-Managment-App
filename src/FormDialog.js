import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Cookies from "js-cookie";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState([]);
  const [lname, setLname] = React.useState([]);
  const [phone, setPhone] = React.useState([]);
  const [email, setEmail] = React.useState([]);

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    if (
      name.length === 0 ||
      lname.length === 0 ||
      phone.length === 0 ||
      email.length === 0
    ) {
      alert("Please Fill All The Fields");
      return;
    }

    if (Cookies.get("contacts") === undefined) {
      Cookies.set(
        "contacts",
        JSON.stringify([
          { name: name, lname: lname, phone: phone, email: email },
        ])
      );
    } else {
      let contacts = JSON.parse(Cookies.get("contacts"));
      contacts.push({ name: name, lname: lname, phone: phone, email: email });
      Cookies.set("contacts", JSON.stringify(contacts));
    }
    console.log(JSON.parse(Cookies.get("contacts")));
    console.log(JSON.stringify(name));

    setOpen(false);
    window.location.href = "/";
  };
  const Hnadlephone = (e) => {
    setPhone(e.target.value);
  };

  const HandleLname = (e) => {
    setLname(e.target.value);
  };
  const Handlename = (e) => {
    setName(e.target.value);
  };

  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      
      <div>
        <Button variant="outlined" onClick={handleClickOpen} style = {{
          "margin" : "auto",
          "display" : "block",
          "margin-top" : "10px",
          "color" : "green",
          "border" : "2px solid green",
          "border-radius" : "10px",
          "padding" : "10px",
          "width" : "200px",
          // "background-color" : "white"
        }}>
          Add Contact
        </Button>
        <Dialog open={open} onClose={handleSubmit}>
          <DialogTitle>Add Contact</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Kindly Add Your Contact Details Here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="First_name"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={Handlename}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="L_name"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={HandleLname}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone Number"
              type="number"
              maxLength="10"
              variant="standard"
              onChange={Hnadlephone}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={HandleEmail}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickClose}>Cancel</Button>
            <Button onClick={handleSubmit}> Add </Button>
          </DialogActions>
        </Dialog>
      </div>
     
    </>
  );
}
