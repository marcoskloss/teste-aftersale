import { getCurrentTime, formateTime } from './utils.js'
import setBuildingWindowsState from './setBuildingWindowsState.js'

export default function setBackground(sunrise, sunset) {

  const bodyElement = document.querySelector('body')
  const moon = document.querySelector('.moon')
  const sun = document.querySelector('.sun')

  let currentTime = getCurrentTime()
  let [ formattedSunrise, formattedSunset ] = formateTime(sunrise, sunset)

  currentTime = currentTime
                .split(':')
                .map(item => Number(item))

  formattedSunrise = formattedSunrise
                      .split(':')
                      .map(item => Number(item))

  formattedSunset = formattedSunset
                    .split(':')
                    .map(item => Number(item))

  const hour = 0
  const minute = 1

  if (currentTime[hour] > formattedSunrise[hour] &&
      currentTime[hour] < formattedSunset[hour]) {

      bodyElement.classList.remove('night')
      bodyElement.classList.add('day')

      moon.classList.remove('is-active')
      sun.classList.add('is-active')
  }
  else if (currentTime[hour] == formattedSunrise[hour] &&
           currentTime[minute] >=  formattedSunrise[minute]) {
          
            bodyElement.classList.remove('night')
            bodyElement.classList.add('day')
            
            moon.classList.remove('is-active')
            sun.classList.add('is-active')
  }
  else if (currentTime[hour] == formattedSunset[hour] &&
           currentTime[minute] < formattedSunset[minute]) {

            bodyElement.classList.remove('night')
            bodyElement.classList.add('day')

            moon.classList.remove('is-active')
            sun.classList.add('is-active')
  }
  else {
    bodyElement.classList.remove('day')
    bodyElement.classList.add('night')

    sun.classList.remove('is-active')
    moon.classList.add('is-active')
  }

  setBuildingWindowsState()       
}
