def main():
    def sum_even_numbers(seq):
        result = 0
        for num in seq:
            if num % 2 == 0:
                result += num
        print(result)
        return result

    sum_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


if __name__ == "__main__":
    main()

# Status: Solved
