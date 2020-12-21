def main():
    def burner(c, h, o):
        H2O = 0  # Water
        CO2 = 0  # Carbon Dioxide
        CH4 = 0  # Methane
        while h >= 2 and o >= 1:
            h -= 2
            o -= 1
            H2O += 1
        while c >= 1 and o >= 2:
            c -= 1
            o -= 2
            CO2 += 1
        while c >= 1 and h >= 4:
            c -= 1
            h -= 4
            CH4 += 1
        print(f"         Water (H2O): {H2O}\nCarbon Dioxide (CO2): {CO2}\n       Methane (CH4): {CH4}")
        return H2O, CO2, CH4

    burner(354, 1023230, 0)


if __name__ == "__main__":
    main()

