export const getCountriesByName=(url)=>{
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('something went wrong')
    }
    return response.json()
  })
}