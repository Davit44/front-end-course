// // 1.gtnel bacakayox elementy
// function f(arr){
//     const lastNumber = arr.length + 1;
//     // [1, n] SUM
//     // n * (n + 1) / 2
//     const normalSum = lastNumber * (lastNumber + 1) / 2;
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i] // 1
//     }
//     return normalSum - sum;
//  }
//  function f1(arr){
//      for(let i = 1; i < arr.length; i++){
//          if(arr[i] - arr[i - 1] !== 1){ // 3
//              return arr[i] - 1;
//          }
//      }
//  }
//  // [1, 2, 3, 5, ........... 6999999999999, 7000000000000]
//  // [1, 2, 3, 5, 6]





// // 2. 
// / [5, 4, 15, 6, 9]
// // pakasox elementneri zangvac stanal
// const arr = [5, 4, 15, 6, 9];
// arr.sort((a, b) => a - b); // [4, 5, 6, 9, 15, 16, 18]
// const pakasoxElementner = []; // [7, 8, 10, 11, 12, 13, 14, 17]
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] - arr[i - 1] !== 1){
//         for(let j = arr[i - 1] + 1; j < arr[i]; j++ ){
//             pakasoxElementner.push(j)
//         }
//     }
// }


// 3. 
// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
// Return the blurred image as an integer, with the fractions rounded down.
// Example
// For
// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].
// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.
// For
// image = [[7, 4, 0, 1], 
//          [5, 6, 2, 2], 
//          [6, 10, 7, 8], 
//          [1, 4, 2, 0]]
// the output should be
// boxBlur(image) = [[5, 4], 
//                   [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

function boxBlur(matrix){
    const rows = matrix.length - 2;
    const columns = matrix[0].length - 2;
    const output = new Array(rows).fill(new Array(columns));
    for(let column = 0; column < columns; column++){
        for(let row = 0; row < rows; row++){
            let sum = 0;
            for(let j = row; j < row + 3; j++) {  
                for(let i = column; i < column + 3; i++){
                    sum += matrix[j][i]
                }
            }
            output[row][column] = (sum / 9) | 0;
        }
    }
    return output
}
// 1///
// [[36,0,18,9,9,45,27], 
//  [27,0,254,9,0,63,90], 
//  [81,255,72,45,18,27,0], 
//  [0,0,9,81,27,18,45], 
//  [45,45,227,227,90,81,72], 
//  [45,18,9,255,9,18,45], 
//  [27,81,36,127,255,72,81]]
// =>
// [[82,73,48,25,31], 
//  [77,80,57,32,32], 
//  [81,106,88,68,42], 
//  [44,96,103,89,45], 
//  [59,113,137,126,80]]
// 2//
// [[36,0,18,9], 
//  [27,54,9,0], 
//  [81,63,72,45]]
// => 
// [[40,30]]