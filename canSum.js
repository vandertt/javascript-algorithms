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
