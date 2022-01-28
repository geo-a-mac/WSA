// get modal element
var modal = document.getElementById("simpleModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get modal close button
var closeBtn = document.getElementById("closeBtn");

// open the modal 
var openModal = function() {
    modal.style.display = "block";
};
// close the modal
var closeModal = function() {
    modal.style.display = "none";
};
// close the modal if window is clicked
var clickOutside = function(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}

var map;
const pos = { lat: 40.774857, lng: -73.984195};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 19
  });

  const marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}

initMap();

//event listeners
// for button to open Modal
modalBtn.addEventListener("click", openModal);
// for button to close Modal
closeBtn.addEventListener("click", closeModal);
// for click outside Modal to close Modal
window.addEventListener("click", clickOutside);

