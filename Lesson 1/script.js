// function triangle() {
//     let a = '';
//     for(let i = 1; i <= 7; i++) {
//         a += '#';
//         console.log(a);
//     }
// }
//
// triangle();

// function FizzBuzz() {
//      for(let i = 1; i <= 100; i++) {
//
//              if (i % 5 == 0 && i % 3 == 0) {
//                  console.log('FizzBuzz');
//              } else if (i % 5 == 0 && i % 3 != 0) {
//                  console.log('Buzz');
//              } else if (i % 3 == 0) {
//                  console.log('Fizz');
//              } else {
//                  console.log(i);
//              }
//          }
//
//     for (let n = 1; n <= 100; n++) {
//         let output = "";
//         if (n % 3 == 0) output += "Fizz";
//         if (n % 5 == 0) output += "Buzz";
//         console.log(output || n);
//     }
// }
//
// FizzBuzz();

function chessBoard() {
    // const limit = 8;
    // let result = '';
    // for(let i = 0; i < limit; i++) {
    //     for( let j = 0; j < limit; j++) {
    //         if (i % 2 !== 0) {
    //             result += j % 2 === 0 ? ' ' : '#'
    //         } else {
    //             result += j % 2 === 0 ? '#' : ' '
    //         }
    //     }
    //     result += '\n'
    // }
    // return result

    let result = '';
    for(let i = 0; i < 8; i++) {
        for( let j = 0; j < 8; j++) {
            if (i % 2 !== 0) {
                result += j % 2 === 0 ? ' ' : '#'
            } else {
                result += j % 2 === 0 ? '#' : ' '
            }
        }
        result += '\n'
    }
    return result
}

console.log(chessBoard())

