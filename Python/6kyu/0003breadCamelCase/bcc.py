def main():
    def solution(camelCase):
        result = ""
        for letter in camelCase:
            if letter == letter.upper():
                result += " " + letter
            else:
                result += letter
        print(result)
        return result
    solution("camelCase")


if __name__ == "__main__":
    main()

# Status: Solved