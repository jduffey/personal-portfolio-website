import Link from 'next/link'

export default function GamesHomepage() {
    return (
        <>
            <Link href="/games/roulette">Roulette</Link>
            <Link href="/games/solitaire">Solitaire</Link>
        </>
    )
}