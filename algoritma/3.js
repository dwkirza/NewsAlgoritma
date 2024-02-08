// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

function countOccurrences(INPUT, QUERY) {
  const occurrences = [];

  for (const query of QUERY) {
    let count = 0;
    for (const word of INPUT) {
      if (query === word) {
        count++;
      }
    }
    occurrences.push(count);
  }

  return occurrences;
}

const output = countOccurrences(INPUT, QUERY);
console.log(output);
