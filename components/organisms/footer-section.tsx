import ContactCard from "../molecules/contact-card";

export default function Footer() {
    return (
        <footer className="flex-col w-screen" role="contentinfo">
            <section className="flex items-center">
                <div className="flex-4/5">
                    <span className="label">SCORE</span>
                    <span className="value">012345</span>
                </div>

                <div className="flex flex-1/5">
                    <ContactCard className="" title="Contact Us" links={[
                        { label: "Email", url: "mailto:contact@example.com" },
                        { label: "Phone", url: "tel:+1234567890" },
                    ]} />

                    <ContactCard className="" title="SNS" links={[
                        { label: "Twitter", url: "https://twitter.com" },
                        { label: "Facebook", url: "https://facebook.com" },
                        { label: "Instagram", url: "https://instagram.com" },
                    ]} />
                </div>
            </section>
            <section className="lower bg-secondary-foreground text-primary-foreground flex justify-center items-center py-4">
                <h1>© 1988 • PIXEL GAMES</h1>
            </section>


        </footer>
    );
}