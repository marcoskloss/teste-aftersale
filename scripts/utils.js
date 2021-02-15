export function getCurrentTime() {
  const date = new Date()

  let hour = date.getHours()
  let minute = date.getMinutes()

  if (minute.length == 1) {
    minute = `0${minute}`
  }
  
  return `${hour}:${minute}`
  
}

export function formateTime(...time) {
  const formattedTimes = time.map(item => {
    let hour = Number(item.split(':')[0])

    
    const minute = item.split(':')[1]
    
    const period = `${item[item.length - 2]}${item[item.length - 1]}` 
    
    if (period == 'AM' && hour == 12) {
      hour = 0
    }

    if (period != 'AM' && hour < 12) {
      hour += 12
    }

    return `${hour}:${minute}`
  })

  return formattedTimes
}
