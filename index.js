function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let nodes = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < nodes.length; i += 1){
    let num = parseInt(nodes[i].innerHTML);
    nodes[i].innerHTML = (num + n);
  }
}

function deepestChild(){
  
}

