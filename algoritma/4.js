// Copyright 1999-2024. Plesk International GmbH. All rights reserved.

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function differenceOfDiagonals(matrix) {
  let diagonalSum1 = 0;
  let diagonalSum2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonalSum1 += matrix[i][i];
    diagonalSum2 += matrix[i][matrix.length - 1 - i];
  }

  console.log("Jumlah diagonal pertama =", diagonalSum1);
  console.log("Jumlah diagonal kedua =", diagonalSum2);

  const result = Math.abs(diagonalSum1 - diagonalSum2);
  console.log(
    "maka hasilnya adalah",
    diagonalSum1,
    "-",
    diagonalSum2,
    "=",
    result
  );

  return result;
}

differenceOfDiagonals(matrix);
