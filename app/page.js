import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const githubUrl = "https://github.com/jduffey/personal-portfolio-website";
const twitterUrl = "https://twitter.com/jedduffey";
const linkedinUrl = "https://www.linkedin.com/in/jedduffey/";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col p-8'>
            <div className='mb-2 text-3xl font-bold text-gray-300'>
                {"Jed Duffey"}
            </div>
            <div className='mb-4 text-2xl text-gray-300'>
                {"Code, etc."}
            </div>
            <div className='flex'>
                <div className='flex text-center m-0 mb-4 p-2 border-2 border-gray-300 rounded-2xl'>
                    {[
                        { icon: FaGithub, url: githubUrl },
                        { icon: FaTwitter, url: twitterUrl },
                        { icon: FaLinkedin, url: linkedinUrl },
                    ].map((item, index) => (
                        <a
                            key={index}
                            className='no-underline font-bold m-2 text-gray-300 hover:text-amber-500'
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <item.icon size={36} />
                        </a>
                    ))}
                </div>
            </div>
            <div className='flex flex-col text-gray-300'>
                <div className='mb-2 text-2xl font-bold'>
                    {"Projects + Prototypes"}
                </div>
                <div className='mb-4'>
                    <ul>
                        {[
                            { text: "Mark I", url: "mark-i" },
                            { text: "Mark II", url: "mark-ii" },
                            { text: "Mark VII", url: "mark-vii" },
                        ].map((item, index) => (
                            <li key={index}>
                                <a
                                    className='ml-2 text-lg hover:text-amber-500'
                                    href={item.url}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mb-2 text-2xl font-bold'>
                    {"Games"}
                </div>
                <div className='mb-4'>
                    <ul>
                        {[
                            { text: "Roulette", url: "roulette" },
                            { text: "Space Poker", url: "space-poker" },
                            { text: "Three Card Poker", url: "three-card-poker" },
                        ].map((item, index) => (
                            <li key={index}>
                                <a
                                    className='ml-2 text-lg hover:text-amber-500'
                                    href={item.url}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mb-2 text-2xl font-bold'>
                    {"Data Viz + Simulations"}
                </div>
                <div className='mb-4'>
                    <ul>
                        {[
                            { text: "Capture-Recapture", url: "capture-recapture" },
                            { text: "Secretary Problem", url: "secretary-problem" },
                        ].map((item, index) => (
                            <li key={index}>
                                <a
                                    className='ml-2 text-lg hover:text-amber-500'
                                    href={item.url}>
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mb-2 text-2xl font-bold'>
                    {"Dev / Infra"}
                </div>
                <div className='mb-4'>
                    <a
                        className='ml-2 text-lg hover:text-amber-500'
                        href={"api"}>
                        {"Next.js server API route demo"}
                    </a>
                </div>
            </div>
        </main>
    )
}
