const filteredCities = (cities, way) => {
  return cities.filter((city) => {
    if (way === '') {
      return city
    }
    else {
      return city.city?.toLowerCase().includes(way)
    }
  })
}

export { filteredCities }