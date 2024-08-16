
const ul = document.querySelector('.countries__list')

fetch('https://restcountries.com/v3.1/all').then((response)=>{
  if (!response.ok){
    throw new Error('something went wrong')
  }
  return response.json()
}).then((data)=>{
  const marcap = data.map(item=>{
    return`<li><h2>Name : ${item.name.common}</h2><p>Capital : ${item.capital?item.capital[0]:'no capital'}</p><p>Landguages : ${item.languages?Object.keys(item.languages).join(', '):'no language'}</p><img src="${item.flags.png}" alt="${item.name.common}"/></li>`
  }).join('')
  ul.insertAdjacentHTML('beforeend',marcap)
  // console.log(data[0])
})

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  fetch('https://restcountries.com/v3.1/name/deutschland').then((response)=>{
    if (!response.ok){
      throw new Error('something went wrong')
    }
    return response.json()
  }).then((data)=>{
    const marcap = data.map(item=>{
      return`<li><h2>Name : ${item.name.common}</h2><p>Capital : ${item.capital?item.capital[0]:'no capital'}</p><p>Landguages : ${item.languages?Object.keys(item.languages).join(', '):'no language'}</p><img src="${item.flags.png}" alt="${item.name.common}"/></li>`
    }).join('')
    console.log(marcap)
    ul.innerHTML=marcap
  })
})