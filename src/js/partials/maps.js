;(function ($) {
    var latitude = 55.759616,
    longitude = 37.625457,
    map_zoom = 18;
    
    var style= [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "gamma": "0.4"
                },
                {
                    "saturation": "-86"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": "-31"
                },
                {
                    "lightness": "15"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "-99"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "saturation": "-63"
                },
                {
                    "gamma": "1.14"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "gamma": "0.92"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": "1.29"
                },
                {
                    "saturation": "-6"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "gamma": "1.00"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "weight": "0.00"
                },
                {
                    "gamma": "2"
                },
                {
                    "lightness": "-29"
                },
                {
                    "saturation": "-82"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [
                {
                    "gamma": "1.00"
                }
            ]
        }
    ]

    if($('.map').data('page') == 'contacts'){

        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }

        var map = new google.maps.Map(document.getElementById('google-container'), map_options);

        var marker = new google.maps.Marker ({
            map: map,
            position: {lat: 55.759616, lng: 37.625457},
            icon: 'img/marker.svg'
        })
    }

   
})(jQuery)
