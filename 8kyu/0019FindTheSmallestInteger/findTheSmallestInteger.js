
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args = args.sort(function(a,b){return a-b;});
      return args.shift();
    }
}
