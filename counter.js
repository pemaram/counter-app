const btn = document.querySelectorAll(".mainbutton button")
const zero = document.querySelector("#zero")
let count = 0 ;



btn.forEach(function (btn){
  btn.addEventListener("click" , (e) =>{
      const counter = e.currentTarget.classList
      if(counter.contains('dec')){
          count--
      }
      else if(counter.contains('inc')){
          count++ ;
      }
      else{
          count = 0;
      }

      if(count > 0){
          zero.style.color = 'green'
      }

      if(count < 0 ){
          zero.style.color = 'red'
      }
      zero.textContent = count
  })  
})