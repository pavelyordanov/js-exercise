

function sortArray(inputArray, sortMethod){
   var ascendingComarator = function (a, b) { 
       return a - b;
   };

   var descendingComarator = function (a, b) { 
    return b - a;
   };

   var sortingStrategies = { 
       'asc': ascendingComarator,
       'desc': descendingComarator
   };
   return inputArray.sort(sortingStrategies[sortMethod]);

  
}

sortArray([14, 7, 17, 6, 8], 'asc')