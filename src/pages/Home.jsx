import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect/dist/core';
import Tilt from 'react-parallax-tilt';

import About from "../components/home/about";

import lightpattern from "../assets/images/pattern_light.svg";
import darkpattern from "../assets/images/pattern_dark.svg";

/* Utils */
import Data from "../data/home.js";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../utils/motion.js";
import { schema } from './../data/schema';
import WithMotion from "../components/WithMotion.jsx";

export default function Home({ theme }) {
    const homeRef = React.useRef(null);
    React.useEffect(() => {
        homeRef.current.style.backgroundImage = `url(${theme === "dark" ? darkpattern : lightpattern
            })`;
        new Typewriter('#h', {
            strings: Data.hero.headerP2,
            autoStart: true,
            delay: 100,
            loop: true
        });
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
                    {JSON.stringify(schema)}
                </script>
            </Helmet>

            <motion.div
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                animate={{ rotate: 360, opacity: 0 }}
                className="_sketch absolute top-100 left-10 opacity-75 hidden lg:block">
                <svg fill="none" height="44" viewBox="0 0 68 68" width="44" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff" /></svg>
            </motion.div>

            <motion.div
                transition={{ repeat: Infinity, delay: 2, duration: 2, repeatType: "reverse" }}
                animate={{ rotate: 360, opacity: 0 }} className="_sketch absolute top-[80vh] right-10 opacity-50 hidden lg:block"
            >
                <svg fill="none" height="44" viewBox="0 0 68 68" width="44" xmlns="http://www.w3.org/2000/svg"><path d="m29.201 4.40976c1.4024-4.795399 8.1956-4.795399 9.598 0l4.8413 16.55444c.4787 1.6368 1.7587 2.9168 3.3955 3.3955l16.5544 4.8413c4.7954 1.4024 4.7954 8.1956 0 9.598l-16.5544 4.8413c-1.6368.4787-2.9168 1.7587-3.3955 3.3955l-4.8413 16.5544c-1.4024 4.7954-8.1956 4.7954-9.598 0l-4.8413-16.5544c-.4787-1.6368-1.7587-2.9168-3.3955-3.3955l-16.55444-4.8413c-4.795399-1.4024-4.795399-8.1956 0-9.598l16.55444-4.8413c1.6368-.4787 2.9168-1.7587 3.3955-3.3955z" fill="#fff" /></svg>
            </motion.div>

            <div className="__home" ref={homeRef}>
                <div className="_sketch h-[150px] w-[200px] absolute dark:left-[18%] top-8 rotate-12 rounded-3xl bg-gradient-to-l dark:from-transparent dark:to-blue-500 blur-3xl filter dark:block dark:opacity-20 lg:top-44 lg:-left-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[700px]"></div>


                {/* ____ HERO SECTION */}
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 p-4 py-7 justify-items-center items-center relative md:px-8 overflow-x-hidden"
                    style={{
                        minHeight: "calc(100vh - 150px)",
                    }}
                >
                    <WithMotion object={headContainerAnimation}>
                        <div className="mb-[3rem] lg:mb-0 pt-6 lg:pt-0">
                            <motion.div {...headTextAnimation}>
                                <h1 className="text-4xl md:text-5xl font-bold lg:leading-[3.5rem]">{Data.hero.headerP1}<br /><span className="" id="h">{Data.hero.headerP2[0]}</span></h1>
                            </motion.div>
                            <motion.div {...headContentAnimation}>
                                <p className="mt-8 text-gray-600 dark:text-gray-400">
                                    {Data.hero.paragraph}
                                </p>
                            </motion.div>
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
                                    {Data.hero.action}
                                </Link>
                            </div>
                        </div>
                    </WithMotion>
                    <Tilt
                        perspective={1200}
                        glareMaxOpacity={0}
                        trackOnWindow={true}
                        className="boardOfMe bg-gray-800 rounded-xl shadow-xl w-full">
                        <WithMotion object={slideAnimation("right")}>
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

                                <p><span className="text-gray-400 inline-block w-[20px] border-r border-gray-400 mr-5">3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-400">&lt;</span><span className="text-blue-400">title</span><span className="text-gray-400">&gt;</span>Untitled<span className="text-gray-400">&lt;</span><span className="text-gray-400">/</span><span className="text-blue-400">title</span><span className="text-gray-400">&gt;</span></p>

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
                        </WithMotion>
                    </Tilt>
                </div>

                {/* ____ INTRO SECTION */}
                <WithMotion object={slideAnimation("up")} className="__intro-section w-full mx-auto p-4 md:px-8 py-14 max-w-7xl overflow-x-hidden" id="intro">
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                        <WithMotion object={slideAnimation("left")} className="bg-white shadow lg:w-[40vw] dark:bg-gray-700/50 rounded-[2rem] h-[400px] p-4">
                        </WithMotion>
                        <WithMotion object={slideAnimation("right")} className="bg-white shadow lg:w-[60vw] dark:bg-gray-700/50 rounded-[2rem] h-[400px] p-4">
                        </WithMotion>
                    </div>
                    <div className="mt-8 lg:mt-[70px] flex flex-col md:flex-row gap-4 lg:gap-8">
                        <WithMotion object={slideAnimation("left")} className="bg-white shadow lg:w-[60vw] dark:bg-gray-700/50 rounded-[2rem] h-[400px] p-4">
                        </WithMotion>
                        <WithMotion object={slideAnimation("right")} className="bg-white shadow lg:w-[40vw] dark:bg-gray-700/50 rounded-[2rem] h-[400px] p-4">
                        </WithMotion>
                    </div>
                </WithMotion>

                <div className="w-full border-t border-gray-200 dark:border-0 bg-pattern dark:bg-dpattern lg:py-5 dark:from-gray-900 bg-gradient-to-r from-white">

                    {/* ____ OVERVIEW SECTION */}
                    <WithMotion object={slideAnimation("up")} className="__overview-section w-full mx-auto p-4 md:px-8 py-14 max-w-7xl" id="overview">
                        <div className="flex flex-col items-center justify-center mt-7">
                            <h1 className="text-4xl lg:text-7xl font-semibold text-gray-900 dark:text-white">
                                {Data.overview.heading}
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-center">
                                {Data.overview.paragraph}
                            </p>
                        </div>
                        <WithMotion object={slideAnimation("up")}>
                            <div className="my-14 bg-white dark:bg-slate-800 rounded-md border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-xl">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex flex-wrap justify-center items-center py-7 space-x-3">
                                        {
                                            Data.overview.lists.map((item, index) => (
                                                <div className="flex flex-col items-center justify-center p-4" key={index}>
                                                    <img
                                                        src={item.icon}
                                                        className="w-16 h-16"
                                                    />
                                                    <p className="mt-2 text-gray-600 dark:text-gray-400">{item.name}</p>
                                                </div>))
                                        }
                                    </div>
                                </div>
                            </div>
                        </WithMotion>
                        <div className="max-w-4xl mx-auto">
                            <About />
                        </div>
                    </WithMotion>

                    {/* ____ COUNTER SECTION
                    <div className="__about-section w-full mx-auto bg-[url('https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?cs=srgb&dl=pexels-pixabay-270404.jpg&fm=jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
                        id="about
                    ">
                        <div className="w-full h-full bg-black bg-opacity-50 p-4 md:px-8 py-14 backdrop-blur-md bg-black/30">
                            <div className="max-w-4xl mx-auto">
                                
                            </div>
                        </div>
                    </div> */}
                </div>
            </div >
        </>
    );
}