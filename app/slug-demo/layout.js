import Link from "next/link";

export default function NavBar({ children }) {
    return (
        <section>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light bg-orange-500"
            >
                <Link className='m-2' href="/">Home</Link>
                <Link className='m-2' href="/games/roulette">Roulette</Link>
                <Link className='m-2' href="/games/solitaire">Solitaire</Link>
            </nav>
            {children}
        </section>
    )
}