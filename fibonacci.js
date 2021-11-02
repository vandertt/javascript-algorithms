function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemo(n, memoization = {}) {
  if (n in memoization) {
    return memoization[n];
  }
  if (n <= 2) {
    return 1;
  }
  memoization[n] =
    fibonacciMemo(n - 1, memoization) + fibonacciMemo(n - 2, memoization);
  return memoization[n];
}
