/*---------------------------*/ (I)
// According to the code below, what data is passed to the src attribute of myImage?
// "https://mimo.app/i/sandals.png"
const imageSrc = "https://mimo.app/i/sandals.png";
const imageAlt = "Socks with Sandals";

const myImage = (
 <img
  id="mainImage"
  src={imageSrc}
  alt={imageAlt}
 />
);

