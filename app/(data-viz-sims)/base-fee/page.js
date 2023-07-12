import BaseFee from "./components/base-fee";

const url = "http://192.168.0.10:8545";

const getBlockNumber = async () => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',
            },
            body: JSON.stringify({
                method: "eth_blockNumber",
                params: [],
                jsonrpc: "2.0",
                id: 1,
            }),
        });

        if (!response.ok) {
            throw new Error(`Network reponse error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        const blockNumberHex = data.result;

        return blockNumberHex;
    }
    catch (error) {
        console.error(error);
    }
};

const getBlockByNumber = async (blockNumber) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',
            },
            body: JSON.stringify({
                method: "eth_getBlockByNumber",
                params: [blockNumber, true],
                jsonrpc: "2.0",
                id: 1,
            }),
        });

        if (!response.ok) {
            throw new Error(`Network reponse error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        return data.result;
    }
    catch (error) {
        console.error(error);
    }
};

export default async function BaseFeePage() {
    const blockNumberHex = await getBlockNumber();
    const block = await getBlockByNumber(blockNumberHex);
    const baseFeeHex = block.baseFeePerGas;
    const baseFee = parseInt(baseFeeHex, 16) / 1e9;

    const digitsString = baseFee.toFixed(0);
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
