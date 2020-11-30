
def main():
    def multi_table(number):
        result = ''
        for i in range(1, 11):
            if i == 10:
                result += f'{i} * {number} = {i * number}'
            else:
                result += f'{i} * {number} = {i * number}\n'
        print(result)
        return result
    multi_table(5)


if __name__ == '__main__':
    main()
