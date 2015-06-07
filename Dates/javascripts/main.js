
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

      	// var infowindow = new google.maps.InfoWindow();

      	// var service = new google.maps.places.PlacesService(map);




      	var contentString = 
      		'<div id="content">'+
      		'<div id="siteNotice">'+
      		'</div>'+
      		'<h4 id="firstHeading" class="firstHeading">'+
      		'<a href= "https://www.google.com/maps/dir/Current+Location/33.771125, -118.116528">'+
      		'Clubhouse</a></h4>'+
      		'<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"></a></p>'+
      		'</div>';

  		var infowindow = new google.maps.InfoWindow({
      		content: contentString
  		});

  		var marker = new google.maps.Marker({
      		position: MyLatLang,
      		map: map,
      		title: 'Uluru (Ayers Rock)'
  		});
  
  		google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
  });

      	

      	}
      google.maps.event.addDomListener(window, 'load', initialize);