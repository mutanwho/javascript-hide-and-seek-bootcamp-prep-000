function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var items = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = parseInt(items[i].innerHTML) + n;
  }
}

function deepestChild(){
  
}

