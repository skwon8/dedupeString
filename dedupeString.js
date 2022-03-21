/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str) {
    // create an object
    let obj = {}
    let newStr = ""
    // loop through and access each character in the string
    for (let x = 0; x < str.length; x++) {
        obj[str[x]] = true;
    }
    for (const key in obj) {
        newStr += key
    }
    return newStr
}


console.log(dedupeString("sweet potato")) //"swet poa"