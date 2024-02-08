// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

const text = "NEGIE1";

function myFunction(text) {
  const alphabet = text.match(/[a-zA-Z]/g);
  const numbers = text.match(/[0-9]/g);

  if (!alphabet) return text;

  const reversedalphabet = alphabet.reverse().join("");

  return reversedalphabet + (numbers ? numbers.join("") : "");
}

console.log(myFunction(text));
