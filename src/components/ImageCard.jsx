import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
      <p>{image.category}</p>
    </div>
  );
};

export default ImageCard;
