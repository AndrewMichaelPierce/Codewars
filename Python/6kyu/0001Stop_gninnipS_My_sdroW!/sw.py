
def spin_words(sentence):
    sentence = sentence.split()
    increment = 0
    result = ''
    print(sentence)
    for word in sentence:
        word = word
        if len(word) >= 5:
            deincrement = len(word) - 1
            storePunctuation = ''
            tempWord = ''
            for letter in word:
                if word[deincrement].isalpha():
                    tempWord += word[deincrement]
                else:
                    storePunctuation = word[deincrement]
                if deincrement == 0:
                    tempWord += storePunctuation
                deincrement -= 1
            word = tempWord
        if increment == len(sentence) - 1:
            result += word
        else:
            result += word + ' '
        increment += 1
    print(result)
    return(result)


def main():
    spin_words("Stop Spinning My Words!")


if __name__ == "__main__":
    main()
