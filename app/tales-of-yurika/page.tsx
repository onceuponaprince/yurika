"use client";

import React, { useState } from "react";

type Post = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // markdown
};

const POSTS: Post[] = [
    {
        id: "1",
        title: "Welcome to Tales of Yurika",
        date: "2025-11-14",
        excerpt: "An 8-bit welcome to the little retro blog powered by markdown.",
        content: `# Welcome, traveler!

This is a tiny blog page styled with 8‑bit retro CSS. It supports a subset of Markdown:

- Headings (#, ##, ### ...)
- Unordered lists (- item)
- Fenced code blocks with backticks
- Inline \`code\`, **bold**, *italic*, and [links](https://example.com)

\`\`\`ts
// example code block
function greet(name: string) {
    return \`Hello, \${name}!\`;
}
\`\`\`

Enjoy the pixel vibes!`,
    },
    {
        id: "2",
        title: "Retro Tips",
        date: "2025-11-10",
        excerpt: "Small tips for keeping the retro aesthetic consistent.",
        content: `## Retro styling tips

* Use a monospace font for that console feel
* Use bold, bright palette: cyan, magenta, yellow
* Add chunky borders and pixel shadows

Visit the [project home](/) for more.`,
    },
];

// Very small markdown -> HTML converter (safe-ish: escapes HTML then converts a few constructs)
function escapeHtml(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function inlineify(s: string) {
    // links
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text, href) => {
        return `<a href="${href}" rel="noopener noreferrer" target="_blank">${text}</a>`;
    });
    // bold
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // italic (simple)
    s = s.replace(/\*(.+?)\*/g, "<em>$1</em>");
    // inline code
    s = s.replace(/`([^`]+)`/g, "<code class=\"inline\">$1</code>");
    return s;
}

function markdownToHtml(md: string) {
    const text = escapeHtml(md).replace(/\r/g, "");
    const blocks = text.split(/\n{2,}/);
    let out = "";
    for (let b of blocks) {
        // fenced code block
        if (/^```/.test(b)) {
            const code = b.replace(/^```[^\n]*\n?/, "").replace(/```$/, "");
            out += `<pre><code>${code}</code></pre>`;
            continue;
        }
        // heading
        const hMatch = b.match(/^(#{1,6})\s+(.*)$/m);
        if (hMatch) {
            const level = Math.min(6, hMatch[1].length);
            const content = inlineify(hMatch[2]);
            out += `<h${level}>${content}</h${level}>`;
            continue;
        }
        // unordered list (lines starting with - )
        const lines = b.split("\n");
        if (lines.every((l) => /^-\s+/.test(l))) {
            const items = lines
                .map((l) => `<li>${inlineify(l.replace(/^- +/, ""))}</li>`)
                .join("");
            out += `<ul>${items}</ul>`;
            continue;
        }
        // paragraph (preserve single line breaks)
        const para = inlineify(b.replace(/\n/g, "<br/>"));
        out += `<p>${para}</p>`;
    }
    return out;
}

export default function Blog() {
    const [idx, setIdx] = useState(0);
    const post = POSTS[idx];

    return (
        <main className="retro">
            <div className="frame">
                <header className="head">
                    <div className="title">Tales of Yurika</div>
                    <div className="subtitle">8‑bit diary & notes</div>
                </header>

                <div className="layout">
                    <aside className="sidebar">
                        <div className="menu-title">Posts</div>
                        <nav className="post-list">
                            {POSTS.map((p, i) => (
                                <button
                                    key={p.id}
                                    className={`post-btn ${i === idx ? "active" : ""}`}
                                    onClick={() => setIdx(i)}
                                >
                                    <div className="post-name">{p.title}</div>
                                    <div className="post-date">{p.date}</div>
                                </button>
                            ))}
                        </nav>
                        <div className="credits">pixel vibes · markdown preview</div>
                    </aside>

                    <article className="content" aria-live="polite">
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-meta">{post.date} — {post.excerpt}</div>
                        <section
                            className="post-body"
                            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
                        />
                    </article>
                </div>

                <footer className="foot">© Tales of Yurika — retro CSS demo</footer>
            </div>

            <style jsx>{`
                :root {
                    --bg: #0b0b14;
                    --panel: #11121a;
                    --accent: #00ffd5;
                    --accent-2: #ff66d9;
                    --muted: #9aa0b4;
                    --ink: #e6f0ff;
                    --pixel: 4px;
                }

                .retro {
                    min-height: 100vh;
                    background: linear-gradient(180deg, #041024 0%, var(--bg) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    font-family: "Courier New", ui-monospace, SFMono-Regular, Menlo, Monaco,
                        "Roboto Mono", "Segoe UI", monospace;
                    color: var(--ink);
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }

                .frame {
                    width: 1100px;
                    max-width: calc(100% - 40px);
                    border: calc(var(--pixel) / 1) solid #000;
                    background: repeating-linear-gradient(
                            45deg,
                            rgba(255, 255, 255, 0.02),
                            rgba(255, 255, 255, 0.02) 2px,
                            transparent 2px,
                            transparent 6px
                        ),
                        var(--panel);
                    box-shadow: 8px 8px 0px #000000, -8px -8px 0px rgba(255, 102, 217, 0.04);
                    padding: 18px;
                    outline: 6px solid #02021a;
                }

                .head {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    padding: 8px 12px;
                    margin-bottom: 12px;
                }
                .title {
                    font-size: 20px;
                    letter-spacing: 1px;
                    color: var(--accent-2);
                    text-shadow: 2px 2px 0 #000;
                }
                .subtitle {
                    color: var(--muted);
                    font-size: 12px;
                }

                .layout {
                    display: grid;
                    grid-template-columns: 260px 1fr;
                    gap: 16px;
                }

                .sidebar {
                    background: linear-gradient(180deg, rgba(0,0,0,0.06), transparent);
                    border: 3px solid #000;
                    padding: 10px;
                    min-height: 360px;
                }

                .menu-title {
                    color: var(--accent);
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-shadow: 1px 1px 0 #000;
                }

                .post-list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .post-btn {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px;
                    background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
                    border: 2px solid #000;
                    color: var(--ink);
                    cursor: pointer;
                    text-align: left;
                    font-size: 13px;
                }
                .post-btn:hover { filter: brightness(1.05); }
                .post-btn.active {
                    background: repeating-linear-gradient(
                        45deg,
                        rgba(255, 102, 217, 0.06),
                        rgba(255, 102, 217, 0.06) 4px,
                        transparent 4px,
                        transparent 8px
                    );
                    border-color: var(--accent-2);
                }
                .post-name { font-weight: 700; color: var(--ink); }
                .post-date { font-size: 11px; color: var(--muted); }

                .credits {
                    margin-top: 12px;
                    font-size: 11px;
                    color: var(--muted);
                }

                .content {
                    border: 3px solid #000;
                    padding: 16px;
                    background: linear-gradient(180deg, rgba(0,0,0,0.03), transparent);
                    min-height: 360px;
                }

                .post-title {
                    margin: 0 0 6px 0;
                    color: var(--accent);
                    font-size: 20px;
                    text-shadow: 2px 2px 0 #000;
                }
                .post-meta {
                    color: var(--muted);
                    font-size: 12px;
                    margin-bottom: 12px;
                }

                .post-body p {
                    margin: 8px 0;
                    line-height: 1.5;
                    color: var(--ink);
                    font-size: 14px;
                }

                .post-body h2, .post-body h3 {
                    margin: 10px 0 6px;
                    color: var(--accent-2);
                }

                pre {
                    background: #07111b;
                    padding: 10px;
                    overflow: auto;
                    border: 2px dashed rgba(255,255,255,0.04);
                    margin: 10px 0;
                    font-size: 13px;
                }

                code.inline {
                    background: rgba(0,0,0,0.25);
                    padding: 2px 6px;
                    border: 1px solid rgba(255,255,255,0.03);
                    border-radius: 3px;
                    font-family: inherit;
                }

                a {
                    color: var(--accent);
                    text-decoration: underline;
                }

                ul {
                    margin: 6px 0 6px 18px;
                }

                .foot {
                    margin-top: 12px;
                    font-size: 12px;
                    color: var(--muted);
                    text-align: center;
                }

                @media (max-width: 860px) {
                    .layout { grid-template-columns: 1fr; }
                    .sidebar { order: 2; }
                    .content { order: 1; }
                }
            `}</style>
        </main>
    );
}
