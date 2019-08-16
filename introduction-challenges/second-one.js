function showOnlyEvenNumbers(x, y) {
  for (; x <= y; x++) {
    if ((x % 2) == 0)
      console.log(x)
  }
}

showOnlyEvenNumbers(51, 83);