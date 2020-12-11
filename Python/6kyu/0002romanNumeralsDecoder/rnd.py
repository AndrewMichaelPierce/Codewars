def main():
    def solution(roman):
        I = 1
        V = 5
        X = 10
        L = 50
        C = 100
        D = 500
        M = 1000
        result = 0
        numeral = 0
        length = len(roman)
        for letter in roman:
            if numeral < length - 1:
                if vars()[roman[numeral + 1]] > vars()[roman[numeral]]:
                    result -= vars()[roman[numeral]]
                else:
                    result += vars()[roman[numeral]]
            else:
                result += vars()[roman[numeral]]
            numeral += 1
        return result
    solution("IV")


if __name__ == "__main__":
    main()

# Status: Solved
