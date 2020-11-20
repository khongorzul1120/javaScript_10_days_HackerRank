/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    var arrVowel = [];
    var test = [];
   
    
    for(var i = 0; i< s.length; i++){
        if(s[i] === 'o' ||  s[i] === 'a' || s[i] === 'o' || s[i] === 'i' ||  s[i] === 'u' || s[i] === 'e'){
            arrVowel.push(s[i]);
        }else{
            test.push(s[i]);
        }
    }
    
    for(var i=0; i<arrVowel.length; i++){
        console.log(arrVowel[i]);
    }
    for(var i=0; i<test.length; i++){
        console.log(test[i]);
    }
   
    
}