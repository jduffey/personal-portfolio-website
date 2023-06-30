import Link from "next/link";

export default function NavBar({ children, navLinks }) {
    return (
        <section>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light bg-orange-500 text-lg text-white"
            >
                <Link className='m-6' href="/">Home</Link>
                {navLinks.map((child) => {
                    return (
                        <Link
                            className="ml-2 mr-2 pl-2 pr-2 border-2 border-white rounded-md"
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
