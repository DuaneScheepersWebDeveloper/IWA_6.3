//IWA_6.3: Challenge 1

const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// ⁡⁣⁣⁡⁣⁣⁢Only change below this line⁡

// ⁡⁣⁣⁢const primaryValid = typeof number == primaryPhone ⁡
// ⁡⁣⁣⁢const secondaryValid = typeof number == secondaryPhone⁡

// ⁡⁣⁣⁢console.log('Primary phone is valid numerical string:', primaryValid)⁡
// ⁡⁣⁣⁢console.log('Secondary phone is valid numerical string:', secondaryValid )⁡
//================================================================
// ⁡⁣⁢⁣const primaryValid = /^\d+$/.test(primaryPhone)⁡
// ⁡⁣⁢⁣const secondaryValid = /^\d+$/.test(secondaryPhone)⁡

const hasNumbersInStringOnly= (string)=>{
    for(let i=0; i<string.length; i++) {
        if(isNaN(Number(string[i]))) {
            return false;
    }   
}
return true;
}

const primaryValid = hasNumbersInStringOnly(primaryPhone);
const secondaryValid = hasNumbersInStringOnly(secondaryPhone);
//================================================================
const isValidString = "Is a valid string: "
console.log(isValidString, primaryValid);
console.log(isValidString, secondaryValid);

//================================================================