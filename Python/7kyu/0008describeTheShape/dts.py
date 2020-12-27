def main():
    def describe_the_shape(angles):
        if angles <= 2:
            return "this will be a line segment or a dot"
        else:
            degree = ((angles - 2) * 180) // angles
            print(f"This shape has {angles} sides and each angle measures {degree}")
            return f"This shape has {angles} sides and each angle measures {degree}"
    describe_the_shape(5)


if __name__ == "__main__":
    main()

# Status: Solved
