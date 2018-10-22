function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const nums = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < nums.length; i++) {
    nums[i].innerHTML = parseInt(nums[i].innerHTML) + n;
  }
}

function deepestChild(){
  var deepest = document.getElementById('grand-node').querySelectorAll('div')
  return depeest[deepest.length - 1]
}

