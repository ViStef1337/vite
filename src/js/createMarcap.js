export function createMarcap(hits){
   return hits.map(item=>{
    return `<li class="list__item" data-src='${item.largeImageURL}'><img src='${item.webformatURL}' alt=""><p class="likes">likes:${item.likes}</p><p class="views">views:${item.views}</p><p class="downloads">downloads:${item.downloads}</p></li>`
  }).join('')
}