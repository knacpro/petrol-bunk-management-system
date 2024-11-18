
import React, { useState, useEffect } from 'react';
import './Galley_photo.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const GalleyPhoto = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [newPhoto, setNewPhoto] = useState<string | null>(null);

  // Load photos from localStorage on component mount
  useEffect(() => {
    const savedPhotos = JSON.parse(localStorage.getItem("galleryPhotos") || "[]");
    if (savedPhotos) {
      setPhotos(savedPhotos);
    }
  }, []);

  // Update localStorage whenever photos change
  useEffect(() => {
    localStorage.setItem("galleryPhotos", JSON.stringify(photos));
  }, [photos]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setNewPhoto(reader.result); // Save the uploaded photo URL
        }
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  const handleSubmit = () => {
    if (newPhoto) {
      setPhotos((prevPhotos) => [...prevPhotos, newPhoto]); // Add the new photo to the gallery
      setNewPhoto(null); // Reset the input
      const input = document.querySelector('.upload-input') as HTMLInputElement;
      if (input) input.value = ''; // Clear the file input field
    }
  };

  return (
    <div className="gallery-container">
         <Link to="/dashboard" className="text-sm text-blue-900 hover:underline">
        Back
          </Link>
      <h2 className="gallery-title">School Academics Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="upload-container">
        <label className="upload-label">
          <FontAwesomeIcon icon={faUpload} /> Upload Photo
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="upload-input"
          />
        </label>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GalleyPhoto;
