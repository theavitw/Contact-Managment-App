import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Cookies from "js-cookie";

export default function EditForm(index) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(
    JSON.parse(Cookies.get("contacts"))[index.index].name
    
  );
  const [lname, setLname] = React.useState(
    JSON.parse(Cookies.get("contacts"))[index.index].lname
  );
  const [phone, setPhone] = React.useState(
    JSON.parse(Cookies.get("contacts"))[index.index].phone
  );
  const [email, setEmail] = React.useState(
    JSON.parse(Cookies.get("contacts"))[index.index].email
  );

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmit = (e) => {
    if (
      name.length === 0 ||
      lname.length === 0 ||
      phone.length === 0 ||
      email.length === 0
    ) {
      alert("Please Fill All The Fields");
      return;
    }

    let contacts = JSON.parse(Cookies.get("contacts"));
    contacts[index.index] = {
      name: name,
      lname: lname,
      phone: phone,
      email: email,
    };
    Cookies.set("contacts", JSON.stringify(contacts));
    console.log(JSON.parse(Cookies.get("contacts")));
    console.log(JSON.stringify(name));
    window.location.reload();
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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit Contact
      </Button>
      <Dialog open={open} onClose={handleSubmit}>
        <DialogTitle>CONTACT FORM </DialogTitle>
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
            value={name}
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
            value={lname}

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
            value={phone}

          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={HandleEmail}
            value={email}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel</Button>
          <Button onClick={handleSubmit}> Add </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
