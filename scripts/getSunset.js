import setBackground from './setBackground.js'

export default async function getSunset(lat, long) {

  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const { sunrise, sunset } = data.results
    
    setBackground(sunrise, sunset)
    
  } catch (e) {
    console.log(e);
    alert('Não foi possível calcular o nascer e pôr do sol')
  }
}