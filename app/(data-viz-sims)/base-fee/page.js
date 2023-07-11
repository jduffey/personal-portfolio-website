import digits from "./digits";

export default function BaseFee() {
    const gridSize = 16;
    const squareSize = 48;

    const generateGrid = () => {
        const grid = [];

        for (let row = 0; row < gridSize; row++) {
            const rowElements = [];

            for (let col = 0; col < gridSize; col++) {
                const color = '#FFF3';

                const square = (
                    <div
                        key={`${row}-${col}`}
                        style={{
                            width: `${squareSize}px`,
                            height: `${squareSize}px`,
                            background: color,
                            display: 'inline-block',
                            outline: '1px solid black',
                        }}
                    />
                );

                rowElements.push(square);
            }

            grid.push(rowElements);
        }

        return grid;
    };

    const grid = generateGrid();

    const finalGrid = grid.map((row, rowIndex) => {
        const newRow = row.map((square, colIndex) => {
            if (rowIndex < 5 && colIndex < 3) {
                return digits['1'][rowIndex][colIndex] === 1 ? (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                            width: `${squareSize}px`,
                            height: `${squareSize}px`,
                            backgroundColor: 'pink',
                            display: 'inline-block',
                            outline: '1px solid black',
                        }}
                    />
                ) : (
                    square
                );
            } else {
                return square;
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
