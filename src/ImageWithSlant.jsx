import React from 'react';

const ImageWithSlant = ({ src, alt }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageWithSlant;
