let plus = document.getElementsByClassName("increment")[0];
let minus = document.getElementsByClassName("decrement")[0];
let dlt = document.getElementsByClassName("reset")[0];


let counter = document.getElementsByClassName("counter")[0];

plus.addEventListener("click", function(){
    
    let value = parseInt(counter.innerText);
    value++;
    counter.innerText = value;

})

minus.addEventListener("click",function(){

    let value = parseInt(counter.innerText);
    value--;
    counter.innerText = value;

})

dlt.addEventListener("click",function(){

    let value = parseInt(counter.innerText);
    value = 0;
    counter.innerText = value;

})



