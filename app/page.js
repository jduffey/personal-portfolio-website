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
            <div style={{ display: 'flex' }}>
                <div className='flex text-center m-0 mb-4 p-2 border-2 border-gray-300 rounded-3xl'>
                    {[
                        { icon: FaGithub, url: githubUrl },
                        { icon: FaTwitter, url: twitterUrl },
                        { icon: FaLinkedin, url: linkedinUrl },
                    ].map((item, index) => (
                        <a
                            key={index}
                            className='no-underline font-bold m-2 text-gray-300 hover:text-purple-500'
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
