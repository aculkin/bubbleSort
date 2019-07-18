// describe("Swap Counter", function() {
//    it("is called an appropriate ammount of times", function() {
//       spyOn(window, "swapCounter").and.callThrough();
//       bubbleSort([1, 3, 2]);
//       expect(swapCounter.calls.count()).toEqual(1);
//    });
// });

describe("Bubble Sort", function() {
   it("handles an empty array", function() {
      expect(bubbleSort([])).toEqual([]);
   });

   it("sorts an array", function() {
      expect(bubbleSort([2, 5, 7, 10, 4, 1, 6])).toEqual([
         1,
         2,
         4,
         5,
         6,
         7,
         10
      ]);
   });

   it("swapCounter is called an appropriate ammount of times", function() {
      spyOn(window, "swapCounter").and.callThrough();
      bubbleSort([1, 3, 2]);
      expect(swapCounter.calls.count()).toEqual(1);
   });

   it("swapCounter is called an appropriate ammount of times", function() {
    spyOn(window, "swapCounter").and.callThrough();
    bubbleSort([1, 2, 3, 5, 8, 9, 10, 11, 12]);
    expect(swapCounter.calls.count()).toEqual(0);
 });
});
