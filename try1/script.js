const score = document.querySelector('.b-3-score-b')
const minusScore = document.querySelector('.b-3-minus')
const plusScore = document.querySelector('.b-3-plus')
let price = document.querySelector('.b-3-price')
const addToCart = document.querySelector('.b-3-add-cart')

// console.log(score.innerHTML)

minusScore.addEventListener('click',()=>{
    minusScore.style.padding = '2px 16px 9px'
    setTimeout(()=>{
        minusScore.style.padding = "0px 13px 7px"
    },200)
    if(Number(score.innerHTML>=2)){
        score.innerHTML=Number(score.innerHTML)-1
        let scr = Number(score.innerHTML)
        price.innerHTML = '$'+(4.6*scr).toFixed(1)
       
    }
})


plusScore.addEventListener('click',()=>{
    plusScore.style.padding = '8px 16px'
    setTimeout(()=>{
        plusScore.style.padding = "5px 13px"
    },200)
    if(Number(score.innerHTML<10)){
        score.innerHTML=Number(score.innerHTML)+1
        let scr = Number(score.innerHTML)
        price.innerHTML = '$'+(4.6*scr).toFixed(1)
    }
})

addToCart.addEventListener('click',()=>{

addToCart.style.transform = "rotate(2deg)"
setTimeout(()=>{
    addToCart.style.transform = "rotate(0deg)"
},200)
})

