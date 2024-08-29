import {fetchPhotos} from './js/service.js';
import {createMarcap} from './js/createMarcap.js';

const form = document.querySelector('form')

const ul = document.querySelector('ul')

const modalImg = document.querySelector('.modal__img')

const modal = document.querySelector('.modal')

const input  = document.querySelector('.form__input')



input.addEventListener('input',(e)=>{

  const data = JSON.parse(localStorage.getItem(e.target.name))||{}
  data[e.target.name]=e.target.value
  localStorage.setItem(e.target.name,JSON.stringify(data))

})

form.addEventListener('submit',(e)=>{

  e.preventDefault()

  fetchPhotos(form.elements.text.value).then((data)=>{
    ul.innerHTML=createMarcap(data.hits)
  })
  form.reset()
  localStorage.removeItem('data')
})

ul.addEventListener('click',(e)=>{

  if (e.target===e.currentTarget){
    return
  }

  const li = e.target.closest('.list__item')


  modal.classList.remove('is-hidden')


  modalImg.src=li.dataset.src



})


function loadPage(){
  const localData = localStorage.getItem('data')
  const parsedData = JSON.parse(localData)

  console.log(parsedData)
  if(!parsedData){
    return
  }

  input.value=parsedData.text

}

loadPage()

//стилі для форми і для модального вікна і для галереї
//зберігати дані в локал сторейдж тоді коли ще не засабмітили форму а коли засабмітили видаляти локал сторейдж
//щоб модальне вікно закривалось на escape
//створити кнопку щоб дозавантажувались картинки


// fetch('https://pixabay.com/api/?key=27639319-39c0b1a02ab6ff7f7ad16bce1&q=cat&page=1').then((response)=>{
//   if (!response.ok){
//     throw new Error('something went wrong')
//   }
//   return response.json()
// }).then((data)=>{
//   console.log(data)
// })