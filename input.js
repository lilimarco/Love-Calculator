
function al(){

    var yourName = document.getElementById("yourName").value;
    var otherName = document.getElementById("otherName").value;

    if(document.forms['form'].yourName.value === "" || document.forms['form'].otherName.value === ""){
            alert("Please enter the Name");
           return false;
    }

    
    let counts = {};
    let str = yourName + "loves" + otherName;

    // create unique of laters
    let newUniqueLetters = [...new Set([...str])];

    // create Object of each unique with count
    for(singleLetter in newUniqueLetters){
    counts ={
        ...counts,
        [newUniqueLetters[singleLetter]]:str.split(newUniqueLetters[singleLetter]).length-1
    }
    }

    let newArrayWithNumber = [];
    // create array of number from Objaect counts with laters
    newArrayWithNumber = [...Object.values(counts)]
    newString = String(newArrayWithNumber).replaceAll(',', '');

    // sum end with last one in the array
    function sum(newString){
        // if sum is less than or equal to 2 return newString
        if(newString.length <= 2) return newString;
        let result = '';
        // loop through newstring adding 
        for(let i = 0; i < newString.length/2; i++){
            if (i !== newString.length - 1 -i){
                result += parseInt(newString[i]) + parseInt(newString[newString.length - 1 - i]);
            }else result += newString[i];
        }
        return sum(result);   
    }

            if (sum(newString) > 70){
                alert("Your Love Score " + yourName + " and " + otherName + " is " + sum(newString) + "% and thats a good Relationship")
            }else {
                alert("Your Love Score is " + sum(newString) + "%, But try Harder!")
               
        }
}
