import {createMarcap, createModalMarcap} from "./createMarcap.js";
import {getCountriesByName} from "./countriesAPI.js";


// const ul = document.querySelector('.countries__list')
//
// fetch('https://restcountries.com/v3.1/all').then((response)=>{
//   if (!response.ok){
//     throw new Error('something went wrong')
//   }
//   return response.json()
// }).then((data)=>{
//   const marcap = data.map(item=>{
//     return`<li><h2>Name : ${item.name.common}</h2><p>Capital : ${item.capital?item.capital[0]:'no capital'}</p><p>Landguages : ${item.languages?Object.keys(item.languages).join(', '):'no language'}</p><img src="${item.flags.png}" alt="${item.name.common}"/></li>`
//   }).join('')
//   ul.insertAdjacentHTML('beforeend',marcap)
//   // console.log(data[0])
// })
//
// const form = document.querySelector('form')
//
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   fetch('https://restcountries.com/v3.1/name/deutschland').then((response)=>{
//     if (!response.ok){
//       throw new Error('something went wrong')
//     }
//     return response.json()
//   }).then((data)=>{
//     const marcap = data.map(item=>{
//       return`<li><h2>Name : ${item.name.common}</h2><p>Capital : ${item.capital?item.capital[0]:'no capital'}</p><p>Landguages : ${item.languages?Object.keys(item.languages).join(', '):'no language'}</p><img src="${item.flags.png}" alt="${item.name.common}"/></li>`
//     }).join('')
//     console.log(marcap)
//     ul.innerHTML=marcap
//   })
// })


const ul = document.querySelector('.regions__list')

const btnDiv = document.querySelector('.buttons')

const divModal = document.querySelector('.modal')

const input = document.querySelector('input')



input.addEventListener('input', (e) => {
  if (e.target.value===''){
    ul.innerHTML=''
    return
  }
  getCountriesByName(`https://restcountries.com/v3.1/name/${e.target.value}`).then((data)=>{
    const marcap = createMarcap(data)
    ul.innerHTML=marcap
  })
})

btnDiv.addEventListener('click',(e)=>{
  if (e.target===e.currentTarget){
    return
  }

  const isActive = btnDiv.querySelector('.active')

  if (isActive){
    isActive.classList.remove('active')
  }
  if (e.target===isActive){
    ul.innerHTML=''
    return;
  }

  e.target.classList.add('active')
  getCountriesByName(`https://restcountries.com/v3.1/region/${e.target.textContent}`).then((data)=>{
    const marcap = createMarcap(data)
    ul.innerHTML=marcap
  })
})


ul.addEventListener('click',(e)=>{
  if(e.target===e.currentTarget){
    return
  }
  const li = e.target.closest('.list')

  getCountriesByName(`https://restcountries.com/v3.1/name/${li.dataset.name}`).then((data)=>{
    const marcap = createModalMarcap(data)
    divModal.innerHTML=marcap
  })
  openModal()
})
divModal.addEventListener('click',(e)=>{
  if (e.target.classList.contains('close')){
    closeModal()
  }
})
function openModal(){
  divModal.classList.remove('is-hidden')
}

function closeModal(){
  divModal.classList.add('is-hidden')
}

// fetch('https://restcountries.com/v3.1/region/South America').then((response)=>{
//   if (!response.ok){
//     throw new Error('something went wrong')
//   }
//   return response.json()
// }).then((data)=>{
//   console.log(data)
// })