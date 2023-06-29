import Link from "next/link";

export default function GamesLayout({ children }) {
    return (
        <section>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light bg-orange-500"
            >
                <Link className='mb-2 block' href="/games/roulette">Roulette</Link>
                <Link className='mb-2 block' href="/games/solitaire">Solitaire</Link>
            </nav>
            {children}
        </section>
    )
}