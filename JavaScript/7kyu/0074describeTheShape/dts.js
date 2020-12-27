function describeTheShape(angles){
  if (angles <= 2) {
    return "this will be a line segment or a dot";
  } else {
    let degree = ((angles - 2) * 180) / angles << 0;
    console.log("This shape has " + angles + " sides and each angle measures " + degree);
    return("This shape has " + angles + " sides and each angle measures " + degree);
  }
}

describeTheShape(4);

// Status: Solved