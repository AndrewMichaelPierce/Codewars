def main():
    def build_row_text(index, character):
        result = "|"
        column = 0
        while column < 9:
            if column == index:
                result += character + "|"
            else:
                result += " |"
            column += 1
        print(result)
        return result
    build_row_text(3, "A")


if __name__ == "__main__":
    main()

# Status: Solved
