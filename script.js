function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount: Record<string, number> = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; s    
}
var input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 

