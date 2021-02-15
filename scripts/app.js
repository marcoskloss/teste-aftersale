import getGeolocation from "./getGeolocation.js";

getGeolocation()

const buildingWindows = {
  windows: document.querySelectorAll('.window'),

  turnOnAll() {
    this.windows.forEach(window => {
      window.classList.remove('off')
      window.classList.add('on')
    })
  },

  turnOffAll() {
    this.windows.forEach(window => {
      window.classList.remove('on')
      window.classList.add('off')
    })
  },

  toggle(element) {
    const [...elementHTMLclasses] = element.classList   
    const isOn = elementHTMLclasses.includes('on')

    if (isOn) {
      element.classList.remove('on')
      element.classList.add('off')
    } else {
      element.classList.remove('off')
      element.classList.add('on')
    }
  }
}

const switchButtonOn = document.querySelector('.turn-on')
switchButtonOn.addEventListener('click', () => {
  buildingWindows.turnOnAll()
})

const switchButtonOff = document.querySelector('.turn-off')
switchButtonOff.addEventListener('click', () => {
  buildingWindows.turnOffAll()
})

const windows = document.querySelectorAll('.window')
windows.forEach(window => {
  window.addEventListener('click', () => {
    buildingWindows.toggle(window)
  })
})




