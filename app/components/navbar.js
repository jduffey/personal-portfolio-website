import Link from "next/link";

export default function NavBar({ children, navLinks }) {
    return (
        <section>
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light bg-orange-500"
            >
                <Link className='m-2' href="/">Home</Link>
                {navLinks.map((child) => {
                    return (
                        <Link className="m-2" href={child.route}>{child.name}</Link>
                    )
                })}
            </nav>
            {children}
        </section>
    )
}
