import Link from 'next/link'

export default function GamesHomepage() {
    return (
        <>
            <Link className='mb-2 block' href="/games/roulette">Roulette</Link>
            <Link className='mb-2 block' href="/games/solitaire">Solitaire</Link>
        </>
    )
}