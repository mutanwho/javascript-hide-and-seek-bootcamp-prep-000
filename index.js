function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const nums = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < nums.length; i++) {
    items[i].innerHTML = parseInt(nums[i].innerHTML) + n;
  }
}

function deepestChild(){
  
}

