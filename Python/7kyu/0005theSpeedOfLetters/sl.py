def main():
    def speedify(st):
        biggest = 0
        result = []
        initialMove = 0
        for letter in st:
            if ord(letter) - 64 + initialMove > biggest:
                biggest = ord(letter) - 64 + initialMove
            initialMove += 1
        for index in range(biggest):
            result.append(" ")
        move = 0
        for letter in st:
            letterValue = ord(letter) - 65 + move
            result[letterValue] = letter
            move += 1
        print("".join(result))
        return "".join(result)
    speedify("HELLOWORLD")


if __name__ == "__main__":
    main()

# ord("A") = 65
# chr(65) = 'A'