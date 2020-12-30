using System;

namespace cs0001describeTheShape
{
    class Program
    {
        static void Main()
        {
            static string DescribeTheShape(int angles) 
            {
                if (angles <= 2) {
                  return "this will be a line segment or a dot";
                } 
                var degree = Math.Floor(((angles - 2) * 180.0) / angles);
                var result = "This shape has " + angles + " sides and each angle measures " + degree;
                Console.WriteLine(result);
                return result;
            }
            DescribeTheShape(4);
        }
    }
}

