import digitsPatterns from "./digits";

const gridSize = 16;
const squareSize = 48;

const square = (row, col, bgColor) => {
    return (
        <div
            key={`${row}-${col}`}
            style={{
                width: `${squareSize}px`,
                height: `${squareSize}px`,
                background: bgColor,
                display: 'inline-block',
                outline: '1px solid black',
            }}
        />
    );
};

export default function BaseFee() {
    const digitsString = '678';

    const onGrid =
        Array(gridSize).fill().map(
            () => Array(gridSize).fill({ on: false, color: undefined })
        );

    const baseFeeDigits = digitsString.split('')
        .map(number => digitsPatterns[number])
        .flatMap((digitPattern, digitIndex) => {
            const digitWidth = 3;
            const rowOffset = 0;
            const colOffset = digitIndex * (digitWidth + 1);
            const squares = [];
            const rightJustifyCompensation = 5;

            for (const [patternRowIndex, row] of digitPattern.entries()) {
                for (const [patternColIndex, on] of row.entries()) {
                    if (on === 1) {
                        const rowIndex = patternRowIndex + rowOffset;
                        const colIndex = patternColIndex + colOffset + rightJustifyCompensation;

                        squares.push({ rowIndex, colIndex, on: true, color: 'yellow' });
                    }
                }
            }

            return squares;
        });

    baseFeeDigits.forEach(({ rowIndex, colIndex, on, color }) => {
        onGrid[rowIndex][colIndex] = { on, color };
    });

    // no new block indicator, top left
    for (let i = 0; i < 5; i++) {
        onGrid[i][0] = { on: true, color: 'pink' };
    }

    // bottom row
    for (let i = 0; i < gridSize; i++) {
        onGrid[gridSize - 1][i] = { on: true, color: 'blue' };
    }

    const finalGrid = onGrid.map((row, rowIndex) => {
        const newRow = row.map((_, colIndex) => {
            const thisSquare = onGrid[rowIndex][colIndex];
            return square(
                rowIndex,
                colIndex,
                thisSquare.on
                    ? thisSquare.color
                    : '#FFF2');
        });

        return <div
            key={`row-${rowIndex}`}
            style={{
                fontSize: '0',
                lineHeight: '0',
                margin: '0',
                padding: '0'
            }}>
            {newRow}
        </div>;
    });

    return (
        <>
            {finalGrid}
        </>
    )
}
