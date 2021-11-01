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

function gridTravel(m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTravel(m - 1, n) + gridTravel(m, n - 1);
}

function gridTravelMemo(m, n, memoization = {}) {
  const key = m + "," + n;
  if (key in memoization) return memoization[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memoization[key] =
    gridTravelMemo(m - 1, n, memoization) +
    gridTravelMemo(m, n - 1, memoization);
  return memoization[key];
}

const canSum = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const reminder = target - num;
    if (canSum(reminder, numbers) === true) {
      return true;
    }
  }
  return false;
};

const canSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const reminder = target - num;
    if (canSumMemo(reminder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

const howSumMemo = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    const reminder = target - num;
    const reminderResult = howSumMemo(reminder, numbers, memo);
    if (reminderResult !== null) {
      memo[target] = [...reminderResult, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};
