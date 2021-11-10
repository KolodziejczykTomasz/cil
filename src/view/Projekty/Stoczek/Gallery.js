import React, { useState, useCallback } from 'react';
import stoczek1 from '../../../assets/Images/projekty/Stoczek/stoczek2.jpeg';
import stoczek2 from '../../../assets/Images/projekty/Stoczek/stoczek3.jpeg';
import stoczek3 from '../../../assets/Images/projekty/Stoczek/stoczek4.jpg';
import stoczek4 from '../../../assets/Images/projekty/Stoczek/stoczek5.jpg';

import ImageViewer from 'react-simple-image-viewer';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [stoczek1, stoczek2, stoczek3, stoczek4];

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          height="300px"
          key={index}
          style={{ margin: '2px' }}
          alt="Galeria projektu"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
};

export default Gallery;
