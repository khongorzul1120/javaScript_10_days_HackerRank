var numBtn = document.querySelectorAll(".drum").length;

function myFunction() {
    var arr = [1,2,3,4,5,6,7,8,9];
    var num = [4,1,2,7,5,3,8,9,6];

        btn1 = document.getElementById('btn1');
        btn2 = document.getElementById('btn2');
        btn3 = document.getElementById('btn3');
        btn4 = document.getElementById('btn4');
       
        btn6 = document.getElementById('btn6');
        btn7 = document.getElementById('btn7');
        btn8 = document.getElementById('btn8');
        btn9 = document.getElementById('btn9');

        for(var i=0; i<1; i++){
            btn1.innerHTML = 4;
            btn2.innerHTML = 1;
            btn3.innerHTML = 2;
            btn4.innerHTML = 7;
            btn6.innerHTML = 3;
            btn7.innerHTML = 8;
            btn8.innerHTML = 9;
            btn9.innerHTML = 6;
        }
        
     
         
  }

//   let nums=[1,2,3,6,9,8,7,4];
//   const ids=[1,2,3,6,9,8,7,4];
  
//   let btn5=document.getElementById("btn5");
  
//   btn5.onclick=function() {
//       nums.unshift(nums.pop());
//       for (i=0; i<=7; i++) {
//           document.getElementById("btn"+ids[i]).innerHTML=nums[i];
//       }
//   }