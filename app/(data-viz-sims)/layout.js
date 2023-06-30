import NavBar from "../components/navbar";

export default function Layout({ children }) {
    return (
        <>
            <NavBar
                navLinks={[
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
            {children}
        </>
    )
}