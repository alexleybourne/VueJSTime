<template>
    <div class="map">
        <div class="google-map" id='map'></div>
    </div>
</template>

<script>
export default {
    name: 'Gmap',
    data () {
        return {
            lat: 53,
            lng: -2,
        }
    },
    methods: {
        renderMap(){
            const map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: this.lat , lng: this.lng},
                zoom: 6,
                maxZoom: 15,
                minZoom: 3,
                streetViewControl: false,
                styles: [
                    {
                        "stylers": [
                            {
                                "hue": "#2c3e50"
                            },
                            {
                                "saturation": 250
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 50
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            })
        }
    },
    mounted() {
        this.renderMap()
    }
}
</script>

<style>
    .google-map{
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: #ffff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>