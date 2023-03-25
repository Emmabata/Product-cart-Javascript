const favCart = document.querySelectorAll(".fa-heart");
const remCart = document.querySelectorAll(".fa-trash");

//
const plusBtn1 = document.querySelector(".plus1");
const plusBtn2 = document.querySelector(".plus2");
const plusBtn3 = document.querySelector(".plus3");
//
const minusBtn1 = document.querySelector(".minus1");
const minusBtn2 = document.querySelector(".minus2");
const minusBtn3 = document.querySelector(".minus3");
//
const input1 = document.getElementById("vaLue1");
const input2 = document.getElementById("vaLue2");
const input3 = document.getElementById("vaLue3");
//
const priceTotal1 = document.getElementsByClassName("total-price1");
const priceTotal2 = document.getElementsByClassName("total-price2");
const priceTotal3 = document.getElementsByClassName("total-price3");



 
 
 
// FAVOURITE /HEART SECTION
favCart.forEach(box => {
    box.addEventListener('click', (event) => {
      console.log('box clicked', event);
      if(box.style.color == "black"){
      box.setAttribute('style', 'color: red;');
      }else {
        box.setAttribute('style', 'color: black;');
      }
    });
  });

// FOR THE INCREEMENT BUTTON
      plusBtn1.addEventListener("click", () => {
        input1.value = parseInt(input1.value) + 1;
      })
      plusBtn2.addEventListener("click", () => {
        input2.value = parseInt(input2.value) + 1;
      })
      plusBtn3.addEventListener("click", () => {
        input3.value = parseInt(input3.value) + 1;
      })

      // DECREMENT BUTTON
      minusBtn1.addEventListener("click", () => {
        if(input1.value <= 1){
          input1.value === 1;
        }else{
          input1.value = parseInt(input1.value) - 1;
        }
        
      })
      minusBtn1.addEventListener("click", () => {
        if(input2.value <= 1){
          input2.value === 1;
        }else{
          input2.value = parseInt(input2.value) - 1;
        }
        
      })
      minusBtn1.addEventListener("click", () => {
        if(input3.value <= 1){
          input3.value === 1;
        }else{
          input3.value = parseInt(input3.value) - 1;
        }
        
      })
      
      console.log(thirdLine);