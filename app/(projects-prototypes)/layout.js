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
            {children}
        </>
    )
}