import React, { useState } from "react";

const ImageUploader = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (image) {
      e.preventDefault();
      const fileName = `image_${Date.now()}.jpg`;
      console.log(fileName);
      fetch(`/images/${fileName}`, {
        method: "POST",
        body: image,
      })
        .then(() => {
          onUpload(`/images/${fileName}`);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
