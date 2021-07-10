
let counter = 0;
let htmlCount = document.getElementById("counts");
let addcount = document.getElementById("button");
addcount.addEventListener("click", function() {
   if(counter<50){
     counter = counter + 1;
     htmlCount.innerHTML = counter;
   }
})

let subcount = document.getElementById("botton");
subcount.addEventListener("click", function() {
  if(counter>0){
    counter = counter - 1;
    htmlCount.innerHTML = counter;
  ;
  }
})



