
function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var MyLatLang = new google.maps.LatLng(33.771125, -118.116528);
        
        var mapOptions = {
          center: MyLatLang,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions);

      	var marker = new google.maps.Marker({
      	position: MyLatLang,
      	map: map,
      	title: 'Hello World!'
  											});
      }
      google.maps.event.addDomListener(window, 'load', initialize);