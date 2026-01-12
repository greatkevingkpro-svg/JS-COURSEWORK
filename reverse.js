function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("invalid Entry");
  }

  // let reversedstring = str.split("")
  // .reverse()
  // .join("")

  let reversedstring = "";

  // Loop from the end of the string to the beginning
  for (let i = str.length -1; i >= 0; i--) {
    reversedstring += str[i];
  }

  return reversedstring
}

console.log(reverseString("Kevin"))

try{
  console.log(reverseString(45000));
} catch (error) {
  console.log(`the error returned: ${error}`);
}

// - i = str.length - 1:
    // The loop starts at the last index of the string.
    // Example: if str = "Kevin", then str.length = 5, so i = 4 (pointing to "n").
// - i >= 0:
    // The loop continues until it reaches the first character (index 0).
// - i--:
    // After each iteration, i decreases by 1, moving backwards through the string.
