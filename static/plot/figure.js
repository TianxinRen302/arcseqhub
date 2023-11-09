let images = ['static/plot/images/ancient_human.jpg', 'static/plot/images/ancient_human2.png', 'static/plot/images/ancient_human3.png'];
let currentIndex = 0;
// console.log(document.getElementById('displayImage'));
console.log(123)

setInterval(function() {
  let imageElement = document.getElementById('displayImage');
  // console.log(document.getElementById('displayImage'));
  // Start the fade out effect
  imageElement.style.opacity = "1";

  currentIndex++;
  currentIndex = currentIndex % images.length;
  imageElement.src = images[currentIndex];
  }, 4000);