import BaseFee from "./components/base-fee";

export default function BaseFeePage() {
    // TODO BaseFee was moved to a separate component based on a possible
    // misunderstanding of how to implement API calls from a Next.js server

    const digitsString = '678';
    const gridSize = 16;
    const squareSize = 48;

    return (
        <BaseFee
            digitsString={digitsString}
            gridSize={gridSize}
            squareSize={squareSize}
        />
    )
}