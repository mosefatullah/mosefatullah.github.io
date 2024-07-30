import React from "react";

import Data from "../../data/home";
import WithMotion from "../WithMotion";

function About() {
    React.useEffect(() => {
        var a = document.querySelectorAll("._button");
        if (a) {
            for (let e = 0; e < a.length; e++)
                a[e].onclick = function () {
                    document.querySelectorAll("._section").forEach((s) => {
                        s.classList.add("hidden");
                    })
                    document.querySelectorAll("._button").forEach((b) => {
                        b.classList.remove("text-blue-600", "border-blue-600", "active", "dark:text-blue-500", "dark:border-blue-500");
                        b.classList.add("border-transparent", "hover:text-gray-600", "hover:border-gray-300", "dark:hover:text-gray-300");
                    })
                    a[e].classList.add("text-blue-600", "border-blue-600", "active", "dark:text-blue-500", "dark:border-blue-500");
                    a[e].classList.remove("border-transparent", "hover:text-gray-600", "hover:border-gray-300", "dark:hover:text-gray-300");
                    var t = document.querySelector("#section" + a[e].id.replace("button-", ""));
                    t.classList.remove("hidden");
                }
        }
    }, []);
    return (
        <div className="bg-white dark:bg-slate-800 pt-4 rounded-lg shadow-md dark:shadow-xl">
            <div className="font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex px-4 lg:px-6 -mb-px whitespace-nowrap overflow-x-auto">
                    {Data.overview.about.tabs.map((t, i) => (
                        <li className="me-2 lg:me-4" key={i}>
                            <button id={"button-" + (i + 1)} className={"_button inline-block p-4 border-b-2 " + (
                                i == 0 ? "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            )}>{t}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-7 rounded-b-lg bg-white dark:bg-slate-800">
                <div id="section1" className="_section px-4">
                    {
                        Data.overview.about.experiences.map((e, i) => (
                            <WithMotion key={i} object={{ animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 50 }, transition: { duration: 0.5 } }} className="relative border-b border-gray-200 dark:border-slate-700">
                                <div className="py-5 px-7 md:flex md:gap-6">
                                    <img src={e.logo} alt="Experience" className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-md md:ring-9 md:ring-white md:dark:ring-gray-900 dark:bg-blue-900 mb-4 md:mb-0" />
                                    <div>
                                        <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">{e.company}</h3>
                                        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{e.position}</span>
                                        <p className="my-2 font-normal text-gray-500 dark:text-white text-sm">{e.description}</p>
                                        <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{e.duration}</time>
                                        <p className="my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                                            {e.location}</p>
                                    </div>
                                </div>
                            </WithMotion>
                        ))
                    }
                </div>
                <div id="section2" className="_section px-4 hidden">
                    {
                        Data.overview.about.skills.map((s, i) => (
                            <WithMotion key={i} object={{ animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 50 }, transition: { duration: 0.5 } }} className="relative border-b border-gray-200 dark:border-slate-700">
                                <div className="py-5 px-7 md:flex md:gap-6">
                                    <img src={s.logo} alt="Skill" className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-md md:ring-9 md:ring-white md:dark:ring-gray-900 dark:bg-blue-900 mb-4 md:mb-0" />
                                    <div>
                                        <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">{s.skill}</h3>
                                        <p className="my-2 font-normal text-gray-500 dark:text-white text-sm">{s.description}</p>
                                    </div>
                                </div>
                            </WithMotion>
                        ))
                    }
                </div>
                <div id="section3" className="_section px-4 hidden">
                    {
                        Data.overview.about.education.map((e, i) => (
                            <WithMotion key={i} object={{ animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 50 }, transition: { duration: 0.5 } }} className="relative border-b border-gray-200 dark:border-slate-700">
                                <div className="py-5 px-7 md:flex md:gap-6">
                                    <img src={e.logo} alt="Education" className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-md md:ring-9 md:ring-white md:dark:ring-gray-900 dark:bg-blue-900 mb-4 md:mb-0" />
                                    <div>
                                        <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">{e.institution}</h3>
                                        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{e.degree}</span>
                                        <p className="my-2 font-normal text-gray-500 dark:text-white text-sm">{e.description}</p>
                                        <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{e.duration}</time>
                                        <p className="my-2 text-sm font-normal leading-none text-gray-400 dark:text-white">
                                            {e.location}</p>
                                        <p className="my-2 text-sm font-normal leading-none text-gray-400 dark:text-white">{e.grade}</p>
                                    </div>
                                </div>
                            </WithMotion>
                        ))
                    }
                </div>
                <div id="section4" className="_section px-4 hidden">
                    {
                        Data.overview.about.certifications.map((e, i) => (
                            <WithMotion key={i} object={{ animate: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 50 }, transition: { duration: 0.5 } }} className="relative border-b border-gray-200 dark:border-slate-700">
                                <div className="py-5 px-7 md:flex md:gap-6">
                                    <img src={e.logo} alt="Education" className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-md md:ring-9 md:ring-white md:dark:ring-gray-900 dark:bg-blue-900 mb-4 md:mb-0" />
                                    <div>
                                        <h3 className="mb-1 flex items-center text-xl font-semibold text-gray-900 dark:text-white">{e.title}</h3>
                                        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{e.provider}</span>
                                        <p className="my-2 font-normal text-gray-500 dark:text-white text-sm">Skills: {e.skills}</p>
                                        <time className="block my-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{e.duration}</time>
                                        {e.certificate_img && <a href={e.certificate_img} target="_blank" rel="noreferrer"><img src={e.certificate_img} alt={"Certificate of " + e.title} className="max-w-[100px] mt-5" /></a>}
                                        {e.certificate_link && <a href={e.certificate_link} target="_blank" rel="noreferrer">
                                            <button type="button" className="mt-2 py-1 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show Certificate</button>
                                        </a>}
                                    </div>
                                </div>
                            </WithMotion>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;