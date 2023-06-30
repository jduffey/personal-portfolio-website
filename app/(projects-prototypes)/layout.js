import NavBar from "../components/navbar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar
                navLinks={[
                    {
                        route: 'mark-i',
                        name: 'Mark I',
                    },
                    {
                        route: 'mark-ii',
                        name: 'Mark II',
                    },
                    {
                        route: 'mark-vii',
                        name: 'Mark VII',
                    }
                ]}
            />
            <main className="min-h-screen m-2">
                {children}
            </main>
        </>
    )
}