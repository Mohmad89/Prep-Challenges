'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    
    let index = 0;
    if (str.lastIndexOf(" ") == -1){
        index = 0;
    }else{
        index = str.lastIndexOf(" ")+1 ;
    }
    return str.substring(index);
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let arr = str.split(' ');
    return arr[arr.length -1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let arr = str.split(' ');
    if(arr.indexOf('I') != -1) {
        arr.splice(arr.indexOf('I'), 1, 'We');
    }  if(arr.indexOf('was') != -1) {    
        arr.splice(arr.indexOf('was'), 1, 'were');
    }  if(arr.indexOf('am') != -1) {
        arr.splice(arr.indexOf('am'), 1,'are');
    }  
    return arr.join(' ');
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if((i+1) % 5 === 0 ){
            arr[i] = `${arr[i]},`;
        }
    }
    let str = arr.join(' ');
    return str;
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let arr_words = str.split(" ");
    let arr_char  =[];
    let resulte   =[];
    let count = 1;
    let first = "";
    let next  = "";
    let strs  = "";

    for(let i = 0; i < arr_words.length; i++){
        arr_char = arr_words[i].split("");
        for(let j = 0; j< arr_char.length; j++){
            first = arr_char[j];
            next = arr_char[j+1];
            
            if (first === next){
            count++;
            continue;
            }
            
            if (count === 0){
                count++;
                resulte.push (arr_char[j]+count);
            }else {
                resulte.push( arr_char[j]+count);
            }
            count = 1;
        }
        if(i < arr_words.length-1){
            resulte.push(' ');
        }
    }
    strs = resulte.join("");
    return strs;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };