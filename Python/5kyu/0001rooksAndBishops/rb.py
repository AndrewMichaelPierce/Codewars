def main():
    def bishops_and_rooks(chessboard):

        rook = []
        bishop = []

        blankBoard = [
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 21, 22, 23, 24, 25, 26, 27, 28, 200,
            200, 31, 32, 33, 34, 35, 36, 37, 38, 200,
            200, 41, 42, 43, 44, 45, 46, 47, 48, 200,
            200, 51, 52, 53, 54, 55, 56, 57, 58, 200,
            200, 61, 62, 63, 64, 65, 66, 67, 68, 200,
            200, 71, 72, 73, 74, 75, 76, 77, 78, 200,
            200, 81, 82, 83, 84, 85, 86, 87, 88, 200,
            200, 91, 92, 93, 94, 95, 96, 97, 98, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200
        ]

        activePosition = [
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 21, 22, 23, 24, 25, 26, 27, 28, 200,
            200, 31, 32, 33, 34, 35, 36, 37, 38, 200,
            200, 41, 42, 43, 44, 45, 46, 47, 48, 200,
            200, 51, 52, 53, 54, 55, 56, 57, 58, 200,
            200, 61, 62, 63, 64, 65, 66, 67, 68, 200,
            200, 71, 72, 73, 74, 75, 76, 77, 78, 200,
            200, 81, 82, 83, 84, 85, 86, 87, 88, 200,
            200, 91, 92, 93, 94, 95, 96, 97, 98, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200
        ]

        whiteInfluence = [
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 21, 22, 23, 24, 25, 26, 27, 28, 200,
            200, 31, 32, 33, 34, 35, 36, 37, 38, 200,
            200, 41, 42, 43, 44, 45, 46, 47, 48, 200,
            200, 51, 52, 53, 54, 55, 56, 57, 58, 200,
            200, 61, 62, 63, 64, 65, 66, 67, 68, 200,
            200, 71, 72, 73, 74, 75, 76, 77, 78, 200,
            200, 81, 82, 83, 84, 85, 86, 87, 88, 200,
            200, 91, 92, 93, 94, 95, 96, 97, 98, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200
        ]

        def findPiece(chessboard):
            for column in range(8):
                for row in range(8):
                    if chessboard[column][row] > 0:
                        rook.append(str(((column + 2) * 10) + (row + 1)))
                        activePosition[((column + 2) * 10) + (row + 1)] = "R"
                        whiteInfluence[((column + 2) * 10) + (row + 1)] = "x"
                    elif chessboard[column][row] < 0:
                        bishop.append(str(((column + 2) * 10) + (row + 1)))
                        activePosition[((column + 2) * 10) + (row + 1)] = "B"
                        whiteInfluence[((column + 2) * 10) + (row + 1)] = "x"

        def rookPositions(rookLocation):
            location = int(rookLocation)
            while location == blankBoard[location]:
                if location + 10 == activePosition[location + 10]:
                    whiteInfluence[location + 10] = "x"
                else:
                    break
                location += 10
            location = int(rookLocation)
            while location == blankBoard[location]:
                if location - 10 == activePosition[location - 10]:
                    whiteInfluence[location - 10] = "x"
                else:
                    break
                location -= 10
            location = int(rookLocation)
            while location == blankBoard[location]:
                if location + 1 == activePosition[location + 1]:
                    whiteInfluence[location + 1] = "x"
                else:
                    break
                location += 1
            location = int(rookLocation)
            while location == blankBoard[location]:
                if location - 1 == activePosition[location - 1]:
                    whiteInfluence[location - 1] = "x"
                else:
                    break
                location -= 1

        def bishopPositions(bishopLocation):
            location = int(bishopLocation)
            while location == blankBoard[location]:
                if location + 11 == activePosition[location + 11]:
                    whiteInfluence[location + 11] = "x"
                else:
                    break
                location += 11
            location = int(bishopLocation)
            while location == blankBoard[location]:
                if location - 11 == activePosition[location - 11]:
                    whiteInfluence[location - 11] = "x"
                else:
                    break
                location -= 11
            location = int(bishopLocation)
            while location == blankBoard[location]:
                if location + 9 == activePosition[location + 9]:
                    whiteInfluence[location + 9] = "x"
                else:
                    break
                location += 9
            while location == blankBoard[location]:
                if location - 9 == activePosition[location - 9]:
                    whiteInfluence[location - 9] = "x"
                else:
                    break
                location -= 9

        def calculateInfluence():
            for piece in range(len(rook)):
                rookPositions(rook[piece])
            for piece in range(len(bishop)):
                bishopPositions(bishop[piece])

        def countUnattacked(influenceBoard):
            squareLocation = 21
            result = 0
            while squareLocation < 99:
                if influenceBoard[squareLocation] != "x" and influenceBoard[squareLocation] != 200:
                    result += 1
                squareLocation += 1
            return result

        findPiece(chessboard)
        calculateInfluence()
        result = countUnattacked(whiteInfluence)
        print(result)
        return result

    bishops_and_rooks([
 [1,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,-1,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0]])


if __name__ == "__main__":
    main()

# Status: Solved
