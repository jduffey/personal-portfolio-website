import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const githubUrl = "https://github.com/jduffey/personal-portfolio-website";
const twitterUrl = "https://twitter.com/jedduffey";
const linkedinUrl = "https://www.linkedin.com/in/jedduffey/";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-36">
            <text>
                {"Jed Duffey"}
            </text>
            <text>
                {"Software and Coding Things"}
            </text>

            <div style={{ display: 'flex' }}>
                <div style={{
                    display: "flex",
                    textAlign: "center",
                    margin: "0 0 1em 0",
                    padding: "0.5em",
                    border: "1px solid black",
                    borderRadius: "0.5em",
                }}>
                    {[
                        { icon: FaGithub, url: githubUrl },
                        { icon: FaTwitter, url: twitterUrl },
                        { icon: FaLinkedin, url: linkedinUrl },
                    ].map((item, index) => (
                        <a
                            key={index}
                            style={{
                                color: "black",
                                textDecoration: "none",
                                fontWeight: "bold",
                                margin: "0 0.5em",
                            }}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <item.icon size={36} />
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}
