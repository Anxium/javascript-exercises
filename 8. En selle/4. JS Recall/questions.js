var selectElementsStartingWithA = function(array) {
    for (let i=0;i<array.length;i++) {
        if (array[i].charAt(0) != 'a') {
            array.splice(i,1);
        }
    }

    return array
}

var selectElementsStartingWithVowel = function(array) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let flag;

    for (let i=array.length-1;i>-1;i--) {
        flag = 0;
        for (let j=0;j<vowels.length;j++) {
            if (array[i].charAt(0) == vowels[j]) {
                flag = 1;
            }
        }
        if (flag != 1) {
            array.splice(i,1);
        }
    }
    return array;
}

var removeNullElements = function(array) {
    for (let i=array.length-1;i>-1;i--) {
        if (array[i] == null) {
            array.splice(i,1);
        }
    }
    return array
}

var removeNullAndFalseElements = function(array) {
    for (let i=array.length-1;i>-1;i--) {
        if (array[i] === null || array[i] === false) {
            array.splice(i,1);
        }
    }
    return array
}

var reverseWordsInArray = function(array) {
    for (let i=array.length-1;i>-1;i--) {
        array[i] = array[i].split('').reverse().join('');
    }
    return array
}

var everyPossiblePair = function(array) {
    function pair(tableau) {
        tableau.sort();
        let table = [];
        for(let i=0; i<tableau.length; i++)
            for(let j=i+1; j<tableau.length; j++)
                table.push([tableau[i], tableau[j]]);
        return table;
    }
 
    return pair(array)    
}

var allElementsExceptFirstThree = function(array) {
    array.splice(0,3);
    return array
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    for (let i=array.length-1;i>-1;i--) {
        array[i] = array[i].split('').reverse();
    }
    array.sort();
    for (let i=array.length-1;i>-1;i--) {
        array[i] = array[i].reverse().join('');
    }
    return array
}

var getFirstHalf = function(string) {
    let taille = string.length;
    if (taille%2 == 0) {
        let blbl = string.slice(0, taille/2)
        return blbl
    } else {
        let blbl = string.slice(0, taille/2+1)
        return blbl
    }
}

var makeNegative = function(number) {
    if(number>0) {
        number = -number;
        return number;
    } else {
        return number;
    }
}

var numberOfPalindromes = function(array) {
    let count = 0;
    for (i=0;i<array.length;i++) {
        let pal = array[i].split('').reverse().join('')
        if (array[i]==pal) {
            count++
        }
    }

    return count
}

var shortestWord = function(array) {
    let shortest;
    for (let i=0;i<array.length;i++) {
        if (i+1 <= array.length) {
            if (array[i].length < array[i+1].length) {
                return shortest = array[i];
            }
        }
    }
}

var longestWord = function(array) {
    let longest;
    for (let i=0;i<array.length;i++) {
        if (i+1 <= array.length) {
            if (array[i].length > array[i+1].length) {
                return longest = array[i];
            }
        }
    }
}

var sumNumbers = function(array) {
    return array.reduce((a, b)=> a + b,0);
}

var repeatElements = function(array) {
    array2 = array.slice();
    array = array.concat(array2);
    return array
}

var stringToNumber = function(string) {
    return Number(string)
}

var calculateAverage = function(array) {
    let total = array.reduce((a, b)=> a + b,0);
    return total/array.length
}

var getElementsUntilGreaterThanFive = function(array) {
    array = array.slice(0,6);
    return array
}

var convertArrayToObject = function(array) {
    let object = {};
    for (let i=0;i<array.length;i+=2) {
        object[array[i]]=array[i+1];
    }
    return object
}

var getAllLetters = function(array) {
	name = array;   
    let result = [];

    for (let i = 0; i < name.length; i++){
        name[i] = name[i].split("").join(""); 
        if (name[i] != ',') {
        result.push(name[i]);
        } 
    }
    result.sort();

    for (let i=0; i<result.length; i++){
        if (result[i] == result[i+1]) {
            result.splice(i, 1);
        }
    }

    return result; 
}

var swapKeysAndValues = function(object) {
    let result = {};
    for(let key in object){
        result[object[key]] = key;
    }

    return result
}

var sumKeysAndValues = function(object) {
    let result = 0;
    for(let key in object){
        result += Number(object[key]) + Number(key);
    }
    return result
}

var removeCapitals = function(string) {
    string = string.replace(/[A-Z]/g, '');
    return string
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    let verif = (element) => {
        if (element.toString().length == 1) {
            return `0${element}`
        } else {
            return `${element}`
        }
    }
    
    let day = verif(date.getDay()+1);
    let month = verif(date.getMonth()+1);
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

var getDomainName = function(string) {
    let a = string.lastIndexOf('@');
    let b = string.lastIndexOf('.');

    let i = string.substring(a+1, b)
    return i
}

var titleize = function(string) {
    let table = string.split(' ');
    for (let i=0;i<table.length;i++) {
        if (table[i].length>3) {
            table[i].charAt(0).toUpperCase()
        }
    }

    table.join('')

    return table
}

var checkForSpecialCharacters = function(string) {
    let specialCharachter = /[@!#]/;

    if (string.match(specialCharachter)) {
        return true;
    } else {
        return false;
    }
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(number) {
    let numb = 1;
    for (let i=1;i<=number;i++) {
        numb *= i;
    }
    return numb
}

var findAnagrams = function(string) {
    if (string.length < 2) {
        return [string];
    } else {
        let allAnswers = [];
        for (let i=0;i<string.length;i++) {
            let letter = string[i];
            let shorterWord = string.substr(0, i) + string.substr(i+1, string.length-1);
            let shortwordArray = findAnagrams(shorterWord);
            for (let j=0;j<shortwordArray.length;j++) {
                allAnswers.push(letter + shortwordArray[j]);
            }
        }
        return allAnswers;
    }
}

var convertToCelsius = function(number) {
    return Math.ceil((Number(number)-32)/(9/5))
}

var letterPosition = function(array) {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0;i<array.length;i++) {
        array[i] = array[i].toUpperCase();
        for (let j=0;j<alphabet.length;j++) {
            if (array[i] == alphabet[j]) {
                array[i] = j+1
            }
        }
    }
    return array
}
