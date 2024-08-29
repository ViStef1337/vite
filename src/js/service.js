export function fetchPhotos (query){
  return fetch(`https://pixabay.com/api/?key=27639319-39c0b1a02ab6ff7f7ad16bce1&q=${query}&page=1`).then((response)=>{
    if (!response.ok){
      throw new Error('something went wrong')
    }
    return response.json()
  })
}
