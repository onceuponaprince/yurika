"use client";
import Summary from "./summary-section";

export default function Footer() {
    return (
        <footer className="flex-col w-screen h-screen" role="contentinfo">
                <Summary className="flex-3/5 h-[80vh] w-full rounded-lg overflow-hidden" />
            <section className="flex-2/5 lower bg-secondary-foreground text-primary-foreground flex justify-center items-center py-4">
                <h1>© 1988 • PIXEL GAMES</h1>
            </section>
        </footer>
    );
}