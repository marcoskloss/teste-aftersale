import getSunset from './getSunset.js'

export default function getGeolocation() {
  
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const geolocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }
  
      getSunset(geolocation.lat, geolocation.long)
  
    }, error => {
      console.log(error);
      alert('Não foi possível usar sua localização')
    })
  }
}


  





