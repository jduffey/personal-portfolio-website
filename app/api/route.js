import { NextResponse } from 'next/server'

export async function GET() {

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
            console.log(data);

            const blockNumberHex = data.result;
            const blockNumber = parseInt(blockNumberHex, 16);

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
            // console.log(data);

            return data.result;
        }
        catch (error) {
            console.error(error);
        }
    };

    const blockNumber = await getBlockNumber();
    console.log(`Block number: ${blockNumber}`);

    const block = await getBlockByNumber(blockNumber);
    console.log(`Block: ${block}`);

    const baseFee = block.baseFeePerGas;

    return NextResponse.json(
        {
            blockNumber,
            baseFee,
        }
    )
}