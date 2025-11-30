<template>
    <div>
        <h1>
            welcome Admin
        </h1>
      <div id="map">

      </div>
     
    </div>
</template>

<script>
import L from 'leaflet'

export default{
computed: {
getApiUrl(){
  return this.$store.getters.getApiUrl
}
},
mounted() {
 this.getAllReports()
},
data: () =>({
 allReports: [],
 userLatitude: -28.296866,
 userLongitude:  31.418663 
}),
methods: {
    getAllReports(){

        fetch(this.getApiUrl+'/get-all-safety-reports')
        .then(res => res.json())
        .then(res => {
            console.log('get all reports',res)
            this.allReports = res
            this.generateMap()
        })
    },
generateMap(){
const map = L.map('map').setView([this.userLatitude, this.userLongitude], 10);

this.allReports.forEach(report => {
    if(report.coords){
        const marker = L.marker(report.coords).addTo(map).on('click',() =>{
            marker.bindPopup("To: " + report.department+ ' ' +report.description + ' Urgency: '+report.urgency).openPopup()
        })
    }
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

}

},
}

</script>

<style>
#map{
    height: 400px;
}

</style>