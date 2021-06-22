// Functions found on the web
export const withCommas = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const cumulativeSum = arr => arr.map((sum => value => sum += value)(0))



// Functions I created
export const keysToCamelCase = data => {
  let result = {}

  Object.keys(data).map(key => {
    const arrayValues = key.split('_')
    const upperValues = arrayValues.splice(1).map(
      word => word[0].toUpperCase() + word.substr(1)
    )

    const newKey = [arrayValues[0], ...upperValues].join('')
    const value = data[key]

    if (typeof value === 'object') {
      result[newKey] = keysToCamelCase(value)
    } else {
      result[newKey] = value
    }
  })

  return result
}

export const getYears = (start, end, result = []) => {
  if (start == end) {
    return result.concat(end)
  }

  return getYears(start + 1, end, result.concat(start))
}

export const toPctChange = arr =>
  arr.map((val, idx) => {
    if (idx === 0) {
      return 0
    }
    return ((val / arr[idx-1]) - 1) * 100
  })