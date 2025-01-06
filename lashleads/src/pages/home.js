import React from "react";
import ContactForm from "../components/ContactForm";
import cover from '../assets/floral-background.png';

function HomePage() {
    return (
        <main
            sx={{
                height: '100vh',
                minHeight: '100vh',
                backgroundImage: `url(${cover})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <ContactForm />
        </main>
    )
}

export default HomePage;
