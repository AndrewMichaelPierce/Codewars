
let enough = (cap, on, wait) => (cap > on + wait) ? 0 : on + wait - cap;

/*
Status: Solved
*/