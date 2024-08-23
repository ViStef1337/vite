export const createMarcap=(data)=>{
  return data.map(item=>{
    return`<li class="list" data-name="${item.name.common}"><p>Capital : ${item.capital?item.capital[0]:'no capital'}</p><p>Landguages : ${item.languages?Object.keys(item.languages).join(', '):'no language'}</p><img src="${item.flags.png}" alt="${item.name.common}"/></li>`
  }).join('')
}

export const createModalMarcap=(data)=>{
  return data.map(item=>{
    return`<button class="close">Close</button><div class="list_container"><li class="list" data-name="${item.name.common}"><p>Capital : ${item.capital?item.capital[0]:'no capital'}</p><p>Continent : ${item.continents}</p><p>Landguages : ${item.languages?Object.keys(item.languages).join(', '):'no language'}</p><img src="${item.flags.png}" alt="${item.name.common}"/></li></div>`
  }).join('')
}