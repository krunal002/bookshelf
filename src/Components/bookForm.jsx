import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { BookContext } from "../Context/bookselfContext";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
    addBook();
    handleClose();
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    dispatch({ type: "cover", payload: imgUrl });
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
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            onChange={uploadImage}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {/* insert image */}
            {/* <div>
              <label htmlFor="input-image">
                Book Cover
              </label>
              <input
                id="input-image"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                className="input-bookCover-wrapper"
                onChange={uploadImage}
              />
            </div> */}

            {/* enter name */}
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />

            {/* enter author */}
            <TextField
              id="standard-basic"
              label="Author"
              variant="standard"
              value={state.author}
              onChange={(e) =>
                dispatch({ type: "author", payload: e.target.value })
              }
            />

            {/* select category */}
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">Categoty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.category}
                label="Category"
                onChange={(e) =>
                  dispatch({ type: "category", payload: e.target.value })
                }
              >
                <MenuItem value={"Currently Reading"}>
                  Currently Reading
                </MenuItem>
                <MenuItem value={"Want to Read"}>Want to Read</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
              </Select>
            </FormControl>
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
