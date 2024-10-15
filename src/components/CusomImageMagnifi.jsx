
import React, { useRef, useState } from 'react';

function CustomImageMagnifier({ src, magnifierHeight = 150, magnifierWidth = 150, zoomLevel = 2 }) {
  const imgRef = useRef(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState({});

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    // Avoid magnifier going outside the image
    if (x < 0 || y < 0 || x > width || y > height) {
      setShowMagnifier(false);
    } else {
      setShowMagnifier(true);
      const backgroundPosX = (x / width) * 100;
      const backgroundPosY = (y / height) * 100;

      setMagnifierStyle({
        left: `${x - magnifierWidth / 2}px`,
        top: `${y - magnifierHeight / 2}px`,
        backgroundPosition: `${backgroundPosX}% ${backgroundPosY}%`,
      });
    }
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove} onMouseLeave={() => setShowMagnifier(false)}>
      <img ref={imgRef} src={src} alt="Product" className="w-full" />

      {/* Magnifier Lens */}
      {showMagnifier && (
        <div
          className="absolute pointer-events-none"
          style={{
            ...magnifierStyle,
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${imgRef.current.offsetWidth * zoomLevel}px ${imgRef.current.offsetHeight * zoomLevel}px`,
            borderRadius: '50%',
            border: '2px solid #ccc',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
          }}
        />
      )}
    </div>
  );
}

export default CustomImageMagnifier;
