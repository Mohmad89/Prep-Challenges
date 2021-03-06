'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    const odd_num = arr.filter(odd => {
        return (odd % 2 === 1);
    })
    return odd_num;
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    let full_name = "";
    let result = [];
    
    arr.filter(function(val){
        if(val.firstName == null){
            full_name = val.LastName;
        }else if (val.LastName == null){
            full_name = val.firstName;
        }else {
            full_name = `${val.firstName} ${val.LastName}`;
        }
        if(val.yearsOfExperience > 4 && val.tech === 'JS')
        result.push({fullName : full_name , tech : val.tech})
        return true;
    });
    return result;
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    let regex = /[aeiou]/gi;
    let fil_vowels = arr.filter(word =>{
        return !(word.match(regex));
    });
    return fil_vowels;
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let result = [];
    arr1.filter(function (val){
        if(!(arr2.includes(val))){
            result.push(val);
        }
        return true;
    })
    arr2.filter(function (val){
        if(!(arr1.includes(val))){
            result.push(val);
        }
        return true;
    })
    return result;
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

