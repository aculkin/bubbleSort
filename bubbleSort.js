function swapCounter(swaps) {
   return swaps++;
};

const bubbleSort = array => {
   swaps = 0;
   for (let i = 0; i < array.length; i++) {
       let localSwapCounter = 0
      for (let j = 0; j < array.length - i; j++) {
         if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            swaps = swapCounter(swaps);
            localSwapCounter++;
         }
      }
      if(localSwapCounter===0){
          console.log(i, array, '   ')
          return array
      }
   }

   return array;
};
