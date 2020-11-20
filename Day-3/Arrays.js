function getSecondLargest(nums) {
    var sort = nums.sort(function(a, b){return a - b});
    var arr =[];
       for(var i=0; i<sort.length; i++){
           var j=1;
           if(sort[i] > sort[j]){
                arr.push(sort[i]);  
           }
           j++;
       }
       var secondLargeNum = sort[sort.length-2] ;
       if(secondLargeNum === sort[sort.length - 1]){
           secondLargeNum =  sort[sort.length-3] 
       }
    
    return secondLargeNum;
}