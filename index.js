function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var items =  document.getElementById('app').querySelectorAll('.ranked-list li')
  for (let i = 0; i < items.length; i += 1){
    let num = parseInt(nodes[i].innerHTML);
    nodes[i].innerHTML = (num + n);
  }
}

function deepestChild(){
  
}

