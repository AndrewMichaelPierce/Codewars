def main():
    def even_chars(st):
        if len(st) < 2 or len(st) > 100:
            return 'invalid string'
        else:
            result = []
            increment = 0
            for character in st:
                if increment % 2:
                    result.append(character)
                increment += 1
            print(result)
            return result
    even_chars("abcdefg")


if __name__ == "__main__":
    main()

# Status: Solved
