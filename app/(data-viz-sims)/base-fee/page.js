export default function BaseFee() {
    const gridSize = 16;
    const squareSize = 24;

    const generateGrid = () => {
        const grid = [];

        for (let row = 0; row < gridSize; row++) {
            const rowElements = [];

            for (let col = 0; col < gridSize; col++) {
                const color = 'white';

                const square = (
                    <div
                        key={`${row}-${col}`}
                        style={{
                            width: `${squareSize}px`,
                            height: `${squareSize}px`,
                            backgroundColor: color,
                            display: 'inline-block',
                            outline: '1px solid black',
                            verticalAlign: 'top',
                            fontSize: '0',
                            lineHeight: '0',
                            margin: '0',
                            padding: '0',
                        }}
                    />
                );

                rowElements.push(square);
            }

            grid.push(<div key={`row-${row}`} style={{ fontSize: '0', lineHeight: '0', margin: '0', padding: '0' }}>{rowElements}</div>);
        }

        return grid;
    };

    return <>{generateGrid()}</>;
}
