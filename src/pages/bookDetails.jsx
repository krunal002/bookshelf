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
  const { bookData, deleteBook } = useContext(BookContext);

  const reqBookDetails = bookData.find(({ id }) => id === bookId);

  const handleDelete = () => {
    deleteBook(reqBookDetails);
    navigate("/");
  };

  return (
    <main className="bookDetails-main-container">
      <header className="details-header-container">
        <h1>Book Details</h1>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: 100 }}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </header>

      <section className="bookDetails-primary-container">
        <div>
          <img
            src={reqBookDetails.cover}
            alt="bookCover"
            className="details-image-wrapper"
          />
        </div>

        <div>
          <h1 className="bookDetails-name">{reqBookDetails.name}</h1>
          <p className="bookDetails-author">
            Author: <strong>{reqBookDetails.author}</strong>
          </p>
          <div className="catSelector-wrapper">
            Status:
            <CatSelector book={reqBookDetails} />
          </div>

          <p className="description-container">{reqBookDetails.description}</p>
          <p className="description-genre">
            Genre: <strong>{reqBookDetails.genre}</strong>
          </p>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
            className="rating-container"
          >
            {/*<Typography component="legend">Controlled</Typography>
             <Rating
              name="simple-controlled"
              value={reqBookDetails.rating}
              onChange={(event, newValue) => {
                dispatch({ type: "rating", payload: newValue });
              }}
            /> */}
            <Typography component="legend">Ratings</Typography>
            <Rating name="read-only" value={reqBookDetails.rating} readOnly />
          </Box>

          <Stack direction="row" className="operational-button">
            <BookForm data={reqBookDetails} />
            <Button
              variant="contained"
              color="error"
              sx={{ width: 100 }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </div>
      </section>
    </main>
  );
};
export default BookDetails;
