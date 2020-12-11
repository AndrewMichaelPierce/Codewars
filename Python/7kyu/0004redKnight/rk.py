def main():
    def red_knight(N, P):
        isOdd = False
        if N % 2 != 0:
            isOdd = True
        while N != P:
            P += 1
            N += 2
        if isOdd:
            if (P + 1) % 4 == 0:
                return "Black", N + 1
            else:
                return "White", N + 1
        else:
            if P % 4 == 0:
                return "White", N
            else:
                return "Black", N
    red_knight(0, 4)


if __name__ == "__main__":
    main()

# Status = Solved
