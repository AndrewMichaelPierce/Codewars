def main():
    def anagrams(word, words):
        newword = sorted(word)
        newword = "".join(newword)
        newarray = words
        result = []
        increment = 0
        for sample in newarray:
            simple = sample
            sample = sorted(sample)
            sample = "".join(sample)
            if newword == sample:
                result.append(simple)
            increment += 1
        print(result)
        return result
    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])


if __name__ == "__main__":
    main()

# Status: Solved
