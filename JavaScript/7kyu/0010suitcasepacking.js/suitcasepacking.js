
const fit_in = (a, b, m, n) => (a + b <= m || a + b <= n) && (a * a + b * b <= m * n) && ((a <= n && a <= m) && (b <= n && b <= m)) ? true : false;

/*
Status: Solved
*/