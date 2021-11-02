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
