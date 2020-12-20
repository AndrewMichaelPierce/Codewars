def main():
    def speedify(st):
        biggest = 0
        result = []
        for letter in st:
            if ord(letter) > biggest:
                biggest = ord(letter)
        for index in range(biggest):
            result.append(" ")
        for letter in st:
            letterValue = ord(letter) - 64
            result[letterValue] = letter
        print(result.join())
    speedify("A")


if __name__ == "__main__":
    main()

# ord("A") = 65
# chr(65) = 'A'