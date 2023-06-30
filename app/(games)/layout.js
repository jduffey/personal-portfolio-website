import NavBar from "../components/navbar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar
                navLinks={[
                    {
                        route: 'roulette',
                        name: 'Roulette',
                    },
                    {
                        route: 'space-poker',
                        name: 'Space Poker',
                    },
                    {
                        route: 'three-card-poker',
                        name: 'Three Card Poker',
                    }
                ]}
            />
            {children}
        </>
    )
}