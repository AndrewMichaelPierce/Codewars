
def main():
    def max_multiple(divisor, bound):
        while bound % divisor != 0:
            bound -= 1
        print(bound)
        return bound
    max_multiple(2, 7)


if __name__ == "__main__":
    main()

# Status: Solved
