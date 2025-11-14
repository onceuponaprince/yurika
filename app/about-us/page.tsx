import React from "react";

// /home/onceuponaprince/yurika/app/about-us/page.tsx

export const metadata = {
    title: "About Us – Yurika",
    description: "Learn about Yurika: our mission, values, and the people behind what we do.",
};

export default function AboutPage() {
    return (
        <main style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", color: "#111", lineHeight: 1.6, padding: "48px", maxWidth: 900, margin: "0 auto" }}>
            <header style={{ marginBottom: 32 }}>
                <h1 style={{ fontSize: 36, margin: 0 }}>About Us</h1>
                <p style={{ marginTop: 8, color: "#555" }}>
                    We build thoughtful, reliable software that helps people solve real problems.
                    Our focus is on simplicity, quality, and continuous improvement.
                </p>
            </header>

            <section aria-labelledby="mission" style={{ marginBottom: 32 }}>
                <h2 id="mission" style={{ fontSize: 20, margin: "0 0 8px 0" }}>Our Mission</h2>
                <p style={{ margin: 0 }}>
                    To create delightful products that make complex tasks approachable and enjoyable.
                    We combine design, engineering, and empathy to deliver value for our users and partners.
                </p>
            </section>

            <section aria-labelledby="values" style={{ marginBottom: 32 }}>
                <h2 id="values" style={{ fontSize: 20, margin: "0 0 12px 0" }}>Core Values</h2>
                <ul style={{ paddingLeft: 20, margin: 0, color: "#333" }}>
                    <li style={{ marginBottom: 6 }}><strong>Clarity:</strong> Communicate clearly and make interfaces easy to understand.</li>
                    <li style={{ marginBottom: 6 }}><strong>Quality:</strong> Ship reliable, maintainable software.</li>
                    <li style={{ marginBottom: 6 }}><strong>Users first:</strong> Design with empathy and test assumptions with real people.</li>
                    <li style={{ marginBottom: 6 }}><strong>Continuous learning:</strong> Iterate, measure, and improve.</li>
                </ul>
            </section>

            <section aria-labelledby="team" style={{ marginBottom: 32 }}>
                <h2 id="team" style={{ fontSize: 20, margin: "0 0 12px 0" }}>Team</h2>
                <p style={{ marginTop: 0, marginBottom: 12 }}>
                    A small cross-disciplinary team of designers, engineers, and product thinkers collaborating remotely.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                    {[
                        { name: "Alex Morgan", role: "Product & Design" },
                        { name: "Samira Patel", role: "Engineering" },
                        { name: "Jordan Lee", role: "Community & Ops" },
                    ].map((person) => (
                        <article key={person.name} style={{ border: "1px solid #e6e6e6", borderRadius: 8, padding: 12 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div
                                    aria-hidden
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 24,
                                        background: "#efefef",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 600,
                                        color: "#444",
                                    }}
                                >
                                    {person.name.split(" ").map((n) => n[0]).join("")}
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: 16 }}>{person.name}</h3>
                                    <p style={{ margin: "4px 0 0 0", color: "#666", fontSize: 14 }}>{person.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section aria-labelledby="contact" style={{ marginBottom: 32 }}>
                <h2 id="contact" style={{ fontSize: 20, margin: "0 0 8px 0" }}>Get in touch</h2>
                <p style={{ margin: 0, color: "#333" }}>
                    Interested in working together or have questions? Send us a message at{" "}
                    <a href="mailto:hello@example.com" style={{ color: "#0a66c2" }}>hello@example.com</a>.
                </p>
            </section>

            <footer style={{ marginTop: 40, paddingTop: 16, borderTop: "1px solid #f0f0f0", color: "#777", fontSize: 13 }}>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} Yurika. All rights reserved.</p>
            </footer>
        </main>
    );
}