import Link from "next/link";

export default function NavBar({ children, navLinks }) {
    return (
        <section>
            <nav className="bg-orange-400 text-lg text-white">
                <Link className='m-6 hover:text-gray-800' href="/">Home</Link>
                {navLinks.map((child) => {
                    return (
                        <Link
                            className="m-4 pl-2 pr-2 hover:text-gray-800"
                            href={child.route}
                        >
                            {child.name}
                        </Link>
                    )
                })}
            </nav>
            {children}
        </section>
    )
}
