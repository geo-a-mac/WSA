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
var modalMercedes = document.getElementById("modalMercedes");
var simpleMercedes = document.getElementById("simpleMercedes");
var closeBtn5 = document.getElementById("closeBtn5");
var modalTWS = document.getElementById("modalTWS");
var simpleTWS = document.getElementById("simpleTWS");
var closeBtn6 = document.getElementById("closeBtn6");
var modalLantern = document.getElementById("modalLantern");
var simpleLantern = document.getElementById("simpleLantern");
var closeBtn7 = document.getElementById("closeBtn7");
var modalShed = document.getElementById("modalShed");
var simpleShed = document.getElementById("simpleShed");
var closeBtn8 = document.getElementById("closeBtn8");
var modal1WE = document.getElementById("modal1WE");
var simple1WE = document.getElementById("simple1WE");
var closeBtn9 = document.getElementById("closeBtn9");
var modal5MW = document.getElementById("modal5MW");
var simple5MW = document.getElementById("simple5MW");
var closeBtn10 = document.getElementById("closeBtn10");
var showWeather = document.getElementById("showWeather");
var emailSub = document.getElementById("emailSub");
var emailEntry = document.getElementById("emailEntry");
var message = document.getElementById("message");

// weather functionality
// 1. get the weather
// 2. formate & display weather
var getWeather = function() {
  // format the openweather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=New&20York&units=imperial&appid=80ef5c6717f3834714ead7f302cc767c";
  
  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
          response.json().then(function(data) {
          displayWeather(data);
        });
      } else {
        alert("Error: the city searched for is " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("Unable to connect");
    });
};

var displayWeather = function(data) {
  /* display the weather and forecast for searchCity */
  var cName = data.city.name;
  var dttm = convertDate(data.list[0].dt);
  var temp = data.list[0].main.temp;
  var descr = data.list[0].weather[0].main;
  var wind = data.list[0].wind.speed;
  var humid = data.list[0].main.humidity;
  showWeather.textContent = "Weather in New York: " + dttm + ": Temp: " + temp + "F. Wind speed: " + wind + "mph. Humidity: " + humid + "%";  
}
var convertDate = function(date) {
  let timestamp = date;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var uFormDate = new Date(timestamp * 1000);
  var month = uFormDate.getMonth() + 1;
  var date = uFormDate.getDate();
  var year = uFormDate.getFullYear();
  // Will display date in MM/DD/YYYY formate
  var formattedDate = month + '\/' + date + '\/' + year;
  return formattedDate;
}

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
  } else if (e.target === closeBtn5) {
    simpleMercedes.style.display = "none";
  } else if (e.target === closeBtn6) {
    simpleTWS.style.display = "none";
  } else if (e.target === closeBtn7) {
    simpleLantern.style.display = "none";
  } else if (e.target === closeBtn8) {
    simpleShed.style.display = "none";
  } else if (e.target === closeBtn9) {
    simple1WE.style.display = "none";
  } else if (e.target === closeBtn10) {
    simple5MW.style.display = "none";
  } else if (e.target === closeBtn) {
    modal.style.display = "none";
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
    } else if (e.target === simpleMercedes) {
      simpleMercedes.style.display = "none";
    } else if (e.target === simpleTWS) {
      simpleTWS.style.display = "none";
    } else if (e.target === simpleLantern) {
      simpleLantern.style.display = "none";
    } else if (e.target === simpleShed) {
      simpleShed.style.display = "none";
    } else if (e.target === simple1WE) {
      simple1WE.style.display = "none";
    } else if (e.target === simple5MW) {
      simple5MW.style.display = "none";
    } else if (e.target === modal) {
        modal.style.display = "none";
    };
}
// open the modals
var openModal = function() {
  modal.style.display = "block";
  var prevEmail = JSON.parse(localStorage.getItem("e-mail"));
  if (prevEmail) {
    message.textContent = "We have the following e-mail already on file: " + prevEmail;
  }
};
//5MW
var open5MW = function() {
  simple5MW.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map10"), {
    center: { lat: 40.75227, lng: -73.99808 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.75227, lng: -73.99808 },
    map: map
  });
}

//1WE
var open1WE = function() {
  simple1WE.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map9"), {
    center: { lat: 40.77210, lng: -73.99034 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.77210, lng: -73.99034 },
    map: map
  });
}

//Shed
var openShed = function() {
  simpleShed.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map8"), {
    center: { lat: 40.75331, lng: -74.00226 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.75331, lng: -74.00226 },
    map: map
  });
}

//Lantern
var openLantern = function() {
  simpleLantern.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map7"), {
    center: { lat: 40.74535, lng: -74.00654 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.74535, lng: -74.00654 },
    map: map
  });
}

var openTWS = function() {
  simpleTWS.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map6"), {
    center: { lat: 40.76357, lng: -73.99037 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.76357, lng: -73.99037 },
    map: map
  });
}

var openMercedes = function() {
  simpleMercedes.style.display = "block";
  var map;
    map = new google.maps.Map(document.getElementById("map5"), {
    center: { lat: 40.76796, lng: -73.99171 },
    zoom: 17
  });
  const marker = new google.maps.Marker( {
    position: { lat: 40.76796, lng: -73.99171 },
    map: map
  });
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

var getEmail = function() {
  var email = emailEntry.value;
  if (email) {
    localStorage.setItem("e-mail", JSON.stringify(email));
  }
}


getWeather();
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
modalMercedes.addEventListener("click", openMercedes);
closeBtn5.addEventListener("click", closeModal);
modalTWS.addEventListener("click", openTWS);
closeBtn6.addEventListener("click", closeModal);
modalLantern.addEventListener("click", openLantern);
closeBtn7.addEventListener("click", closeModal);
modalShed.addEventListener("click", openShed);
closeBtn8.addEventListener("click", closeModal);
modal1WE.addEventListener("click", open1WE);
closeBtn9.addEventListener("click", closeModal);
modal5MW.addEventListener("click", open5MW);
closeBtn10.addEventListener("click", closeModal);
emailSub.addEventListener("click", getEmail);
