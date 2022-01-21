"use strict";

function preload(image) {
  var img = document.createElement('img')
  img.style.display = 'none'
  img.src = image
  document.body.appendChild(img)
  document.body.removeChild(img)
}

let coverListener
function getCover(event) {
  let image = event.target.attributes['fullbody'].value
  $('#coverCont img').remove()
  let coverCont = ($('#coverCont').length==0)?document.body.appendChild(document.createElement('div')):$('#coverCont')[0]
  coverCont.id = 'coverCont'
  if ($('#coverCont img').length == 0) {
    coverCont.appendChild(document.createElement('img'))
  }
  $('#coverCont img')[0].src = image?image:'/static/common/noartwork/nocover.png'
  coverCont.style.display = 'block'
  coverListener = mevent => {
    let wh = window.innerHeight, ch = coverCont.clientHeight, ph = mevent.clientY
    let pos = (ph<wh/2) ? ((ph+ch+10>wh) ? wh-ch : ph+10) : ((ph-ch-10<0) ? 0 : ph-ch-10)
    coverCont.style.top = pos+'px'
    if (mevent.clientX > window.innerWidth/2) {
      coverCont.style.left = "initial"
      coverCont.style.right = window.innerWidth-mevent.clientX+10+"px"
    } else {
      coverCont.style.left = mevent.clientX+10+"px"
      coverCont.style.right = "initial"
    }
  }
  document.addEventListener("mousemove", coverListener)
  //Preload next image
  if ($('.torrent_table, .request_table').length > 0) {
    var as = $('[fullbody]')
    var a = event.target
    preload((as[as.toArray().indexOf(a)+1]||as[0]).attributes['fullbody'].value)
    preload((as[as.toArray().indexOf(a)-1]||as[0]).attributes['fullbody'].value)
  }
}
function ungetCover(event) {
  $('#coverCont img').remove()
  coverCont.style.display = 'none'
  document.removeEventListener("mousemove", coverListener)
}

$(function() {
  $(document).on('mouseover', '[fullbody]', getCover)
  $(document).on('mouseleave', '[fullbody]', ungetCover)
})

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.update()
  }).catch(err => {
    console.log("Failed to register service worker: ", err)
  })
}
*/
