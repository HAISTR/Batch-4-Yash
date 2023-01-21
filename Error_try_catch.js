
// try {
//     console.lo("asdasd");
// } catch (error){
//     console.log(error.message);
// }


let x = 15;

try {
    if (x == 5) { throw "Number is queal to 5" }
    if (x > 5) {throw "Number is less then 5"  }
    if (x < 5) { throw "Number is grater then 5" }

} catch (error) {
    console.log(error);
}