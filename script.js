function indexOfIgnoreCase(s1, s2) {
    // Convert both strings to lower case for case insensitive comparison
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    // Check if s2 is included in s1
    if(!s1.includes(s2)){
        return -1;
    }

    // Return the index of s2 in s1
    return s1.indexOf(s2);
}

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));