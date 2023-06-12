// responsive navbar

const toggleMenu = document.getElementById('toggleBtn');
var navBar = document.getElementById('nav');
var navLinks = document.getElementsByClassName('nav-links');

toggleMenu.addEventListener('click', function() {
    navBar.classList.toggle('show')
});

for (var i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        if (navBar.classList.contains('show')) {
            navBar.classList.remove('show');
        }
    });
}

//firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNd-xFRZ3bJFd3I-SSWQElIRDbyETf5tE",
  authDomain: "signuplogin-auth.firebaseapp.com",
  databaseURL: "https://signuplogin-auth-default-rtdb.firebaseio.com",
  projectId: "signuplogin-auth",
  storageBucket: "signuplogin-auth.appspot.com",
  messagingSenderId: "270632562146",
  appId: "1:270632562146:web:0896f5603b0f502c259dbb"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.database();
//firebase
//scroll-to-top-btn
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop() > 50){
                $("#back-to-top").fadeIn();
            }
            else{
                $("#back-to-top").fadeOut();
            }
        });
        $("#back-to-top").click(function(){
            $("body,html").animate({
                scrollTop:0
            }, 400);
            return false;
        })
    })
    //end of-scroll-to-top-btn
    
     //Generating FIREBASE_AUTH Token
 const admin = require('firebase-admin');
 const serviceAccount = require('/path/to/serviceAccountKey.json');
 
 admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   databaseURL: 'https://your-database-url.firebaseio.com'
 });
 
 admin.auth().createCustomToken(uid)
   .then(function(customToken) {
     console.log(customToken);
   })
   .catch(function(error) {
     console.log('Error creating custom token:', error);
   });
   //Generating FIREBASE_AUTH Token

    //dropdown menu
    $('.dropdown-menu a').click(function(){
        $('#selected').text($(this).text());
      });
     //pop up menu
 //location
function getMap(){

  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
    var map = new Microsoft.Maps.Map('#map', {
      center: new Microsoft.Maps.Location(latitude, longitude),
      zoom: 10
      
    });
    var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude));
 

    map.entities.push(pushpin);
  
  })
};

  //location
 //dropdown
 var map;
 var marker;

 function selectCity(cityName, lat, lng) {
   document.getElementById('destinationDropdown').innerText = cityName;
   
   if (map) {
     if (marker) {
      marker.setLocation(new Microsoft.Maps.Location(lat,lng));
     }
     else {
      marker = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lat, lng), { color: 'green' });
      map.entities.push(marker);
    }
    map.setView({ center: new Microsoft.Maps.Location(lat, lng), zoom: 10 });
   } else {
     loadMap(lat, lng);
   }
 }
 
 function loadMap(lat, lng) {
   map = new Microsoft.Maps.Map('#map', {
     center: new Microsoft.Maps.Location(lat, lng),
     zoom: 10
   });
   marker = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(lat, lng), { color: 'green' });
   map.entities.push(marker);
  };
//location dropdown
function toggleDropdown() {
  var dropdown = document.getElementsByClassName('dropdown-content')[0];
  dropdown.classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

 //dropdown
 
 //for schools
 function getMap2(){

  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var map = new Microsoft.Maps.Map('#map2', {
      center: new Microsoft.Maps.Location(latitude, longitude),
      zoom: 10
      
    });
    var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude));
    map.entities.push(pushpin);
  })
};
$(document).ready(function() {
  $('#map2').hide();
$('.view').on('click', function() {
  $('#map2').show();
});
});
 //for schools
 




 