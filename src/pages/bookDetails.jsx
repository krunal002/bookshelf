import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookContext } from "../Context/bookselfContext";
import CatSelector from "../Components/categotySelector";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BookForm from "../Components/bookForm";

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { bookData, dispatch } = useContext(BookContext);

  const reqBookDetails = bookData.find(({ id }) => id === bookId);

  return (
    <main>
      <h1>Book Details</h1>
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: 100 }}
        onClick={() => navigate("/")}
      >
        Back
      </Button>

      <section className="bookDetails-primary-container">
        <div>
          <img src={reqBookDetails.cover} alt="bookCover" />
        </div>

        <div>
          <h2>{reqBookDetails.name}</h2>
          <h2>{reqBookDetails.author}</h2>
          <CatSelector book={reqBookDetails} />

          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={reqBookDetails.rating}
              onChange={(event, newValue) => {
                dispatch({ type: "rating", payload: newValue });
              }}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={reqBookDetails.rating} readOnly />
          </Box>

          <Stack spacing={2} direction="row">
            {/* <Button
              variant="contained"
              color="warning"
              sx={{ width: 100 }}
              // onClick={handleEdit}
            >
              Edit
            </Button> */}
            <BookForm data={reqBookDetails}/>
            <Button variant="contained" color="error" sx={{ width: 100 }}>
              Delete
            </Button>
          </Stack>
        </div>
      </section>
    </main>
  );
};
export default BookDetails;
