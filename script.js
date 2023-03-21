// const favCart = document.querySelectorAll(".fa-heart");
// const remCart = document.querySelectorAll(".fa-trash");
// const addCart = document.querySelectorAll(".fa-plus");
// const minusCart = document.querySelectorAll(".fa-minus");
// const input = document.getElementById("vaLue");


// console.log(input.value);
// console.log(val.value);
// console.log(addCart);
// console.log(minusCart);

// favCart.forEach(box => {
//     box.addEventListener('click', (event) => {
//       console.log('box clicked', event);
//       if(box.style.color == "black"){
//       box.setAttribute('style', 'color: red;');
//       }else {
//         box.setAttribute('style', 'color: black;');
//       }
//     });
//   });

// // FOR THE INCREEMENT BUTTON
//  addCart.forEach(plusSign => {
//   plusSign.addEventListener("click", () => {
//     input.value = parseInt(input.value) + 1;
//   } )
//  })


//  remCart.forEach(minusSign => {
//   minusSign.addEventListener("click", () => {
//     input.value = parseInt(input.value) - 1;
//   } )
//  })

  
// console.log(input)





// function volwelCheck(arr) {
//   let count = 0;
 
   

//   console.log(vowl);
  
//  return count;
// }

// console.log(volwelCheck("a", "d", "r", "u", "i", "e", "o"));


 
function checkVowel(arr) {
    let bags = ["a", "e", "i", "o", "u"]
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < bags.length; j++) {
            if(arr[i] == bags[j]) {
                count++
            }
        }
    }
    return count ;
}

console.log(checkVowel("aeiglo"));

// function extractMiddle(str) {

//     var position;
//     var length;

//     if(str.length % 2 == 1) {
//         position = str.length / 2;
//         length = 1;
//     } else {
//         position = str.length / 2 - 1;
//         length = 2;
//     }

//     return str.substring(position, position + length)
// }

// console.log(extractMiddle("handbanann"));

// function extractMiddle(str) {
//     return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
//   }

//   console.log(extractMiddle("handbanann"));


// Very simple, given an integer or a floating-point number, find its opposite.
// function oppositeNum(num) {
//     return -1 * 9;
// }