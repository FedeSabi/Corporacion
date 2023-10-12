import { useState, useEffect } from "react";
import image1 from "../assets/GC.png";
import image2 from "../assets/JG.png";
import image3 from "../assets/JOGICRAL.png";
import image4 from "../assets/TECN.png";

const originalImages = [image1, image2, image3, image4];
const images = [...originalImages, ...originalImages]; // Duplica las imágenes

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlayPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoPlayPaused) {
        setCurrentImage((prevImage) =>
          prevImage === images.length - 4 ? 0 : prevImage + 1
        );
      }
    }, 1800); // Cambia de imagen cada 2 segundos (ajusta el tiempo según tus necesidades)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [currentImage, isAutoPlayPaused]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform"
        style={{
          width: `${images.length * 25}%`,
          transform: `translateX(-${currentImage * (100 / images.length)}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full sm:h-auto object-cover max-w-full"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
