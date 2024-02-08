// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

const sentence = "saya sangat senang mengerjakan soal algoritma";

function myFunction(sentence) {
  let kataTerpanjang = "";

  for (const kata of sentence.split(" ")) {
    if (kata.length > kataTerpanjang.length) {
      kataTerpanjang = kata;
    }
  }

  return {
    kataTerpanjang,
    alphabetCount: kataTerpanjang.length,
  };
}

const result = myFunction(sentence);
console.log(result.kataTerpanjang, ":", result.alphabetCount);
