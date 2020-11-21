/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(s) {
  if(s.length <= 1) return s;
    try {
        console.log( s.split("").reverse().join(""));
   }
  catch(err) {
  if( typeof (!s)){
      console.log("s.split is not a function");
      console.log(s);
    }
 } 
}

