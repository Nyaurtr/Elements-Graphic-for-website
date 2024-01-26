const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('myButton');
  var imageContainer = document.querySelector('.info-img');
  var textInfoContainer = document.querySelector('.text-info-container');

  myButton.addEventListener('click', function() {
    imageContainer.removeAttribute('hidden');
    textInfoContainer.removeAttribute('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.querySelector('.large-button');
  var imageContainer = document.querySelector('.image-container');
  var textInfoContainer = document.querySelector('.text-info-container');
  var container = document.querySelector('.container');

  myButton.addEventListener('click', function() {
    imageContainer.classList.add('show');
    textInfoContainer.classList.add('show');
    container.classList.add('show-before');
    myButton.style.transform = 'translateX(-100%)';
  });

  document.addEventListener('click', function(event) {
    if (!container.contains(event.target)) {
      imageContainer.classList.remove('show');
      textInfoContainer.classList.remove('show');
      container.classList.remove('show-before');
      myButton.style.transform = '';
    }
  });
});