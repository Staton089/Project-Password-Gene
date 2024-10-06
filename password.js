// Array containing uppercase and lowercase letters for password generation
const passwordArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", // Uppercase letters
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"  // Lowercase letters
  ];
  
  // Function to generate a password of specified length
  function passwordGene(lengthOfPassword) {
    // The password variable will hold the new password being generated
    let password = "";
  
    // Loop runs for 'lengthOfPassword' number of iterations
    for (let i = 0; i < lengthOfPassword; i++) {
      
      // Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive)
      // Multiplying by passwordArray.length scales it to the range of indices in passwordArray (0 to 51)
      // Math.floor() ensures the result is an integer, creating a valid index for passwordArray
      let randomIndex = Math.floor(Math.random() * passwordArray.length);
      
      // Use the random index to select a character from passwordArray
      // (In this case, you are logging the characters instead of adding them to the password)
      console.log(passwordArray[randomIndex]);
  
      // You would need to append each selected character to the 'password' variable like this:
      password = password + passwordArray[randomIndex];

      
    }
    return password;
  }
  
  // Calling the passwordGene function to generate a password of length 100
  passwordGene(10);
  