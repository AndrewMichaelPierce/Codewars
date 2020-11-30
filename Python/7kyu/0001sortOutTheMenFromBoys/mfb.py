def main():
    def men_from_boys(arr):
        # Sorts arr into even and odd arrays, sorts even: low to high, odd: high to low, kills doubles
        evenArray = []
        oddArray = []
        for i in arr:
            if i % 2 == 0:
                evenArray.append(i)
            else:
                oddArray.append(i)
        evenArray.sort()
        oddArray.sort(reverse=True)
        result = evenArray + oddArray
        result = list(dict.fromkeys(result))
        return result

    men_from_boys([1, 2, 3, 4, 5, 6])


if __name__ == "__main__":
    main()
