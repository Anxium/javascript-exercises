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
    return 'Write your method here';
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

}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0;i<array.length;i++) {

    }
}
