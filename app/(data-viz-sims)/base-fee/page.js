import digits from "./digits";

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
    const digitsString = '5678';

    const generateGrid = () => {
        const grid = [];

        for (let row = 0; row < gridSize; row++) {
            const rowElements = [];

            for (let col = 0; col < gridSize; col++) {
                const color = '#FFF3';

                const thisSquare = square(row, col, color);

                rowElements.push(thisSquare);
            }

            grid.push(rowElements);
        }

        return grid;
    };

    const grid = generateGrid();

    const digitWidth = 3;
    const digitHeight = 5;

    const rowOffset = 0;

    const onGrid = Array(gridSize).fill().map(() => Array(gridSize).fill(false));

    for (let digitIndex = digitsString.length - 1; digitIndex >= 0; digitIndex--) {
        const digit = digitsString[digitIndex];
        const colOffset = gridSize - ((digitsString.length - digitIndex) * (digitWidth + 1)) + 1;

        for (let rowIndex = 0; rowIndex < digitHeight; rowIndex++) {
            for (let colIndex = 0; colIndex < digitWidth; colIndex++) {
                if (digits[digit][rowIndex][colIndex] === 1) {
                    onGrid[rowIndex + rowOffset][colIndex + colOffset] = true;
                }
            }
        }
    }

    const finalGrid = grid.map((row, rowIndex) => {
        const newRow = row.map((thisSquare, colIndex) => {
            if (onGrid[rowIndex][colIndex]) {
                return square(rowIndex, colIndex, 'yellow');
            } else {
                return thisSquare;
            }
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
