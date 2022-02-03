// get modal element
var modal = document.getElementById("simpleModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get modal close button
var closeBtn = document.getElementById("closeBtn");
//modal ids for buildings
var btn520w28 = document.getElementById("modal520w28");
var simple520w28 = document.getElementById("simple520w28");
var closeBtn1 = document.getElementById("closeBtn1");
var modalStandard = document.getElementById("modalStandard");
var simpleStandard = document.getElementById("simpleStandard");
var closeBtn2 = document.getElementById("closeBtn2");
var modalVia57 = document.getElementById("modalVia57");
var simpleVia57 = document.getElementById("simpleVia57");
var closeBtn3 = document.getElementById("closeBtn3");
var modalVessel = document.getElementById("modalVessel");
var simpleVessel = document.getElementById("simpleVessel");
var closeBtn4 = document.getElementById("closeBtn4");


// open the modal 
var openModal = function() {
    console.log("modal clicked");
    modal.style.display = "block";
};
// close the modal
var closeModal = function(e) {
  if(e.target === closeBtn1) {
    simple520w28.style.display = "none";
  } else if (e.target === closeBtn2) {
    simpleStandard.style.display = "none";
  } else if (e.target === closeBtn3) {
    simpleVia57.style.display = "none";
  } else if (e.target === closeBtn4) {
    simpleVessel.style.display = "none";
  }
};
// close the modal if window is clicked
var clickOutside = function(e) {
    if(e.target === simple520w28) {
        simple520w28.style.display = "none";
    } else if (e.target === simpleStandard) {
        simpleStandard.style.display = "none";
    } else if (e.target === simpleVia57) {
      simpleVia57.style.display = "none";
    } else if (e.target === simpleVessel) {
      simpleVessel.style.display = "none";
    }
    /*if(e.target === modal) {
        modal.style.display = "none";
    }*/
}

var openVessel = function() {
  simpleVessel.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map4"), {
    center: { lat: 40.75402, lng: -74.00169 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.75402, lng: -74.00169 },
    map: map
  });
}

var open520w28 = function() {
  simple520w28.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map1"), {
    center: { lat: 40.75127, lng: -74.00291 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.75127, lng: -74.00291 },
    map: map
  });
}

var openStandard = function() {
  simpleStandard.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 40.74323, lng: -74.00733 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.74323, lng: -74.00733 },
    map: map
  });
}

var openVia57 = function() {
  simpleVia57.style.display = "block";
  var map;
  map = new google.maps.Map(document.getElementById("map3"), {
  center: { lat: 40.77135, lng: -73.99213 },
  zoom: 17
});
const marker = new google.maps.Marker( {
  position: { lat: 40.77135, lng: -73.99213 },
  map: map
});

}

function initMap() {};
//initMap();

//event listeners
// for button to open Modal
modalBtn.addEventListener("click", openModal);
// for button to close Modal
closeBtn.addEventListener("click", closeModal);
// for click outside Modal to close Modal
window.addEventListener("click", clickOutside);
//modal buttons for buildings
btn520w28.addEventListener("click", open520w28);
closeBtn1.addEventListener("click", closeModal);
modalStandard.addEventListener("click", openStandard);
closeBtn2.addEventListener("click", closeModal);
modalVia57.addEventListener("click", openVia57);
closeBtn3.addEventListener("click", closeModal);
modalVessel.addEventListener("click", openVessel);
closeBtn4.addEventListener("click", closeModal);
