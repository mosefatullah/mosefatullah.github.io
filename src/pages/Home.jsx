import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import lightpattern from "../assets/images/pattern_light.svg";
import darkpattern from "../assets/images/pattern_dark.svg";

import skills from "../assets/images/programming.png";
import services from "../assets/images/services.png";

/*const TickIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 mt-[-2px] inline-block dark:text-white"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);*/

export default function Home({ theme }) {
    const homeRef = React.useRef(null);
    React.useEffect(() => {
        homeRef.current.style.backgroundImage = `url(${theme === "dark" ? darkpattern : lightpattern
            })`;
    }, [theme]);
    return (
        <>
            <Helmet>
                <title>Mohammad Sefatullah - Official Website</title>
                <meta
                    name="description"
                    content="Mohammad Sefatullah is a Bangladeshi web designer, developer and programmer. He dreams of becoming a software engineer and passionate programming leader."
                    data-react-helmet="true"
                />
                <meta
                    name="keywords"
                    content="Mohammad Sefatullah, Sefatullah, web developer, coder, bangladesh, web designer, frontend developer"
                    data-react-helmet="true"
                />
                <script type="application/ld+json" data-react-helmet="true">
                    {`
        {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mohammad Sefatullah",
        "jobTitle": "Full Stack Web Developer",
        "description": "Mohammad Sefatullah, a young and promising web designer, developer, and
        programmer, hails from the Shariatpur District of Bangladesh. Born on
        September 13th, his passion for coding ignited while he was still in
        seventh grade. This early spark ignited a dream – to become a software
        engineer and make a positive impact on his community.",
        "url": "https://sefatullah.me",
        "image": "https://sefatullah.com/android-chrome-512x512.png",
        "sameAs": [
            "https://www.facebook.com/mosefatullah",
            "https://www.instagram.com/mosefatullah",
            "https://www.linkedin.com/in/mosefatullah",
            "https://www.github.com/mosefatullah",
            "https://www.twitter.com/mosefatullah"
        ]
        }
        `}
                </script>
            </Helmet>
            <div className="__home" ref={homeRef}>
                <div className="_sketch h-[150px] w-[200px] absolute dark:left-[18%] top-8 rotate-12 rounded-3xl bg-gradient-to-l dark:from-transparent dark:to-blue-500 blur-3xl filter dark:block dark:opacity-20 lg:top-44 lg:-left-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[700px]"></div>

                {/* ____ HERO SECTION */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 py-7 justify-items-center items-center relative md:px-16"
                    style={{
                        minHeight: "calc(100vh - 74px)",
                    }}
                >
                    <div className="max-w-xl mb-[5rem] lg:mb-0 pt-6 lg:pt-0">
                        <h1 className="text-4xl md:text-5xl font-bold">Passionate Coder & Developer!</h1>
                        <p className="mt-8 text-gray-600 dark:text-gray-400">
                            Sefatullah, also known as Mohammad Sefatullah, is a professional full stack web developer from Bangladesh born in 2006. He dreams of becoming a software engineer and passionate coding leader. He is trying to get involved in various extra curricular activities with the vision of making a positive impact on the society.
                        </p>
                        <div className="mt-12">
                            <Link
                                to="about"
                                className="px-4 py-3 border-2 dark:border-green-500 dark:text-green-500 rounded-md dark:hover:bg-green-600 dark:hover:text-white dark:hover:border-green-600 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold transition duration-300 ease-in-out"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="mr-2 mt-[-2px] inline-block dark:text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                    />
                                </svg>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="boardOfMe bg-gray-800 rounded-xl shadow-xl max-w-xl w-full">
                        <div className="bg-slate-500 p-4 py-2.5 rounded-t-xl flex text-center">
                            <div className="flex gap-2 mt-1">
                                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                            </div>
                            <p className="text-sm text-gray-300 w-full p-0">Visual Studio Code</p>
                        </div>
                        <div className="bg-gray-700 border-b border-gray-600 whitespace-nowrap overflow-x-auto">
                            <button className="bg-gray-800 px-3 py-1 border-e border-gray-600"><span className="px-1 bg-orange-500 text-black rounded-sm font-bold text-sm me-1">5</span> <span className="text-sm text-gray-400">index.html</span></button>
                            <button className="px-3 py-1 border-e border-gray-600"><span className="px-0.5 bg-yellow-500 text-black rounded-sm font-bold text-sm me-1">JS</span> <span className="text-sm text-gray-400">app.js</span></button>
                            <button className="px-3 py-1 border-e border-gray-600"><span className="px-1 bg-[#42a5f5] text-black rounded-sm font-bold text-sm me-1">3</span> <span className="text-sm text-gray-400">style.css</span></button>
                        </div>
                        <div className="px-5 py-4 text-white whitespace-nowrap overflow-x-auto">
                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">1</span><span className="text-gray-400">&lt;</span><span className="text-blue-400">html</span><span className="text-gray-400">&gt;</span><span className="animate-pulse text-white">|</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">2</span>&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-blue-400">head</span><span className="text-gray-400">&gt;</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-blue-400">title</span><span className="text-gray-400">&gt;</span>Sefatullah<span className="text-gray-400">&lt;</span><span className="text-gray-400">/</span><span className="text-blue-400">title</span><span className="text-gray-400">&gt;</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">4</span>&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-gray-400">/</span><span className="text-blue-400">head</span><span className="text-gray-400">&gt;</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">5</span>&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-blue-400">body</span><span className="text-gray-400">&gt;</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-blue-400">p <span className="text-blue-200">class=</span><span className="text-orange-400">&quot;paragraph&quot;</span></span><span className="text-gray-400">&gt;</span>Salam!<span className="text-gray-400">&lt;</span><span className="text-gray-400">/</span><span className="text-blue-400">p</span><span className="text-gray-400">&gt;</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">7</span>&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-gray-400">/</span><span className="text-blue-400">body</span><span className="text-gray-400">&gt;</span></p>

                            <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">8</span><span className="text-gray-400">&lt;</span><span className="text-gray-400">/</span><span className="text-blue-400">html</span><span className="text-gray-400">&gt;</span></p>

                        </div>
                        <div className="border-t border-gray-600 flex bg-blue-500 rounded-b-lg text-white whitespace-nowrap overflow-x-auto">
                            <button className="py-0.5 px-2.5 bg-green-700 rounded-bl-lg text-sm font-semibold">&gt;<sup className="inline-block -ml-0.5 scale-[1.3]">&lt;</sup></button>
                            <div className="ml-auto flex text-sm">
                                <button className="py-0.5 pe-3 rounded-br-lg">Ln 1, Col 7</button>
                                <button className="py-0.5 pe-3 rounded-br-lg">Spaces: 2</button>
                                <button className="py-0.5 pe-3 rounded-br-lg">UTF-8</button>
                                <button className="py-0.5 pe-3 rounded-br-lg">CRLF</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ____ SKILLS SECTION */}
                <div className="__skills-section w-full border-t border-gray-200 dark:border-gray-800 bg-pattern dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0 dark:from-gray-900  bg-gradient-to-r from-white">
                    <div className="w-full mx-auto p-4 md:px-0 py-14 max-w-5xl">
                        <div className="flex flex-col items-center justify-center mt-7">
                            <img src={skills} className="w-16 h-16" />
                            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
                                Skills
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                                Sefatullah have learned many programming languages and frameworks. He is
                                continuously learning and practicing coding.
                            </p>
                        </div>
                        <div className="w-full my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-wrap justify-center items-center py-7 space-x-3">
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/html-5.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">HTML</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/css3.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">CSS</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/javascript.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">JavaScript</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/bootstrap.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">Bootstrap</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/firebase.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">Firebase</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/react-native.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">React</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <img
                                            src="https://img.icons8.com/color/96/000000/nodejs.png"
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-gray-600 dark:text-gray-400">Nodejs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ____ SERVICES SECTION */}
                <div className="__skills-section w-full border-t border-gray-200 dark:border-gray-800 bg-pattern dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0 dark:bg-gray-900 bg-white">
                    <div className="w-full mx-auto p-4 md:px-0 py-14 max-w-5xl">
                        <div className="flex flex-col items-center justify-center mt-7">
                            <img src={services} className="w-16 h-16" />
                            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mt-2">
                                Services
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                                Sefatullah is a web developer and programmer. he is providing some
                                services to his clients.
                            </p>
                        </div>
                        <div className="w-full py-6 my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl md:py-12 text-center text-gray-600 dark:text-gray-400">
                            <p>Please contact him!</p>
                            <Link
                                to="contact"
                                className="inline-block mt-4 px-4 py-2 border-2 dark:border-green-500 dark:text-green-500 rounded-md dark:hover:bg-green-600 dark:hover:text-white dark:hover:border-green-600 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold transition duration-300 ease-in-out"
                            >Contact</Link>
                        </div>
                        {/* DEMO BOX */
                        /*
                        <div className="w-full sm:p-1 lg:p-5 my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
                            <div className="flex flex-wrap -mx-4 space-y-2">
                                <div className="w-full md:w-1/2 p-4 px-8 flex items-center justify-center">
                                    <img
                                        src={webdesign}
                                        className="w-full aspect-video object-cover rounded-md"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                    <h1 className="text-gray-900 dark:text-white text-3xl font-semibold mt-2">
                                        Web Design
                                    </h1>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                                        I can design your website with modern design and user friendly
                                        interface.
                                    </p>
                                    <ul className="mt-4 text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center">
                                            <TickIcon />
                                            Modern Design
                                        </li>
                                        <li className="flex items-center">
                                            <TickIcon />
                                            User Friendly
                                        </li>
                                        <li className="flex items-center">
                                            <TickIcon />
                                            Responsive
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Starting at
                                            <span className="text-green-500 dark:text-green-400 font-semibold ml-2">
                                                $10
                                            </span>
                                        </span>
                                    </div>
                                    <div className="mt-9">
                                        <Link
                                            to="package/?id=webdesign"
                                            className="px-4 py-3 border-2 dark:border-green-500 dark:text-green-500 rounded-md dark:hover:bg-green-600 dark:hover:text-white dark:hover:border-green-600 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold transition duration-300 ease-in-out"
                                        >
                                            Comapre Packages
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:p-1 lg:p-5 my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
                            <div className="flex flex-wrap -mx-4 space-y-2">
                                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                    <h1 className="text-gray-900 dark:text-white text-3xl font-semibold mt-2">
                                        Web Development
                                    </h1>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                                        I can develop your website with modern design.
                                    </p>
                                    <ul className="mt-4 text-gray-600 dark:text-gray-400">
                                        <li className="flex items-center">
                                            <TickIcon />
                                            Website Design
                                        </li>
                                        <li className="flex items-center">
                                            <TickIcon />
                                            Controlled Functions
                                        </li>
                                        <li className="flex items-center">
                                            <TickIcon />
                                            Admin Panel
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Starting at
                                            <span className="text-green-500 dark:text-green-400 font-semibold ml-2">
                                                $30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="mt-9">
                                        <Link
                                            to="package/?id=webdev"
                                            className="px-4 py-3 border-2 dark:border-green-500 dark:text-green-500 rounded-md dark:hover:bg-green-600 dark:hover:text-white dark:hover:border-green-600 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 font-semibold transition duration-300 ease-in-out"
                                        >
                                            Comapre Packages
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-4 px-8 flex items-center justify-center relative">
                                    <img src={webdevelop3} className="object-cover w-full rounded-md" />
                                    <img
                                        src={webdevelop1}
                                        className="absolute top-[50px] left-[100px] h-[80%] rounded-md"
                                    />
                                </div>
                            </div>
                        </div>  */}
                    </div>
                </div>
            </div>
        </>
    );
}
