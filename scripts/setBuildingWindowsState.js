export default function setBuildingWindowsState() {

  const buildingWindows = document.querySelectorAll('.window')

  const bodyElement = document.querySelector('body')
  const [ ...bodyElementHTMLclasses ] = bodyElement.classList

  const isDay = bodyElementHTMLclasses.includes('day')

  if (isDay) {

    buildingWindows.forEach(window => {
      window.classList.remove('on')
      window.classList.add('off')
    })
  } else {
    buildingWindows.forEach(window => {
      window.classList.remove('off')
      window.classList.add('on')
    })
  }
}