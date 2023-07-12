import NavBar from "../components/navbar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar
                navLinks={[
                    {
                        route: 'base-fee',
                        name: 'Base Fee',
                    },
                    {
                        route: 'capture-recapture',
                        name: 'Capture-Recapture',
                    },
                    {
                        route: 'secretary-problem',
                        name: 'Secretary Problem',
                    },
                ]}
            />
            <main className="min-h-screen m-2">
                {children}
            </main>
        </>
    )
}