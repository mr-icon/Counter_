'use strict'
var counter = document.getElementById('counter')
var num = 0
function increase (){
    num++
    counter.innerHTML = num
} 
function decrease (){
    num--
    counter.innerHTML = num
}
function reset (){
    num = 0
    counter.innerHTML = num
}