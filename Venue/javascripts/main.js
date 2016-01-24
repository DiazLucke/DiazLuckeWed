
function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var MyLatLang = new google.maps.LatLng(33.364384, -117.245632);
        
        var mapOptions = {
          center: MyLatLang,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions);

      	var marker = new google.maps.Marker({
      		position: MyLatLang,
      		map: map,
      		title: 'Grand Tradition'
  											});

      	var contentString = 
      		'<div id="content">'+
      		'<div id="siteNotice">'+
      		'</div>'+
      		'<h5 id="firstHeading" class="firstHeading">'+
      		'<a href= "https://www.google.com/maps/dir/Current+Location/33.364384, -117.245632">'+
      		'Grand Tradition</a></h5>'+
      		'<a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"></a></p>'+
      		'</div>';

  		var infowindow = new google.maps.InfoWindow({
      		content: contentString
  		});
  
  		google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
  		});

      	}
      google.maps.event.addDomListener(window, 'load', initialize);