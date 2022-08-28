const imageUrls = [
  "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
  "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg",
  "https://i.ibb.co/dBLbrRV/bg1.jpg",
  "https://i.ibb.co/Fb5jb3J/bg2.jpg",
  "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg",
];

// console.log(randImg);
const bg1Elements = document.querySelectorAll(".bg1");
const bg2Elements = document.querySelectorAll(".bg2");

function getRandomImage() {
  let randomNum1 = Math.floor(Math.random() * imageUrls.length);
  let randomNum2 = Math.floor(Math.random() * imageUrls.length);
  let backgroundImg1 = imageUrls[randomNum1];
  let backgroundImg2 = imageUrls[randomNum2];

  // Remember need to use 'querySelectorAll' for forEach
  bg1Elements.forEach((element) => {
    element.style.backgroundImage = `url("${backgroundImg1}")`;
    element.classList.add("fadeIn");
  });

  bg2Elements.forEach((element) => {
    element.style.backgroundImage = `url("${backgroundImg2}")`;
    element.classList.add("fadeIn");
  });
}

getRandomImage();
setInterval(getRandomImage, 5000);
