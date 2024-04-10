import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { BookContext } from "../Context/bookselfContext";

export default function BookForm() {
  const [open, setOpen] = React.useState(false);
  const { state, dispatch, addBook } = React.useContext(BookContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBook = () => {
    addBook(); // Call addBook function
    handleClose(); // Close the dialog
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Book
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ADD NEW BOOK"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />
            <TextField
              id="standard-basic"
              label="Author"
              variant="standard"
              value={state.author}
              onChange={(e) =>
                dispatch({ type: "author", payload: e.target.value })
              }
            />
            <TextField
              id="standard-basic"
              label="Category"
              variant="standard"
              value={state.category}
              onChange={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
          <Button onClick={handleAddBook} autoFocus>
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
