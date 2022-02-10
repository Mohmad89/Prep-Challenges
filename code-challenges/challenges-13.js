'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// ------------------------

const objectCounter = (obj) => {
    let count = obj.reduce(function (acc, val, index) {
        acc++;
        return acc;
    }, 0);
    return count;
}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    let text = str.split(" ");
    let arr2 = [];
    let result= "";
    text.reduce(function (acc, val) {
        arr2.unshift(val);
    }, 0);
    arr2.reduce(function (acc, val) {
        result += val+" ";
    }, 0);
    result = result.slice(0 , -1);
    return result;
}

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
      let res = {};
    let count_james = 0;
    let count_jada = 0;
    let count_bailey = 0;
    let count_chad =0;
    let counter = "";
    obj.reduce(function (acc, val){
        if(val.votes_To === "James"){
            count_james += 1;
        } if (val.votes_To === "Jade"){
            count_jada += 1;
        } if (val.votes_To === "Bailey"){
            count_bailey += 1;
        } if (val.votes_To === "Chad"){
            count_chad += 1;
        }
    }, 0)

    if (count_james > 0){
    res.James = count_james;
    }
    if (count_jada > 0){
    res.Jade = count_jada;
    }
    if (count_bailey > 0){
    res.Bailey = count_bailey;
    }
    if (count_chad > 0){
    res.Chad = count_chad;
    }
    return res;
    
}



module.exports = { objectCounter, stringReverse, statistics };
