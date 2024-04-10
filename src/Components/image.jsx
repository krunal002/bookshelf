import React, { useState } from 'react';

function ImageUpload() {
  // State to store the selected image file
  const [imageFile, setImageFile] = useState(null);

  // Function to handle when a new image is selected
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You might want to add some validation here to ensure it's an image file
    setImageFile(file);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFile) {
      // Here you can handle uploading the image file to a server
      console.log('Uploading image:', imageFile);
      // Reset the state after upload is complete
      setImageFile(null);
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <button type="submit">Upload Image</button>
        </div>
      </form>
      {imageFile && (
        <div>
          <h2>Preview:</h2>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
