import React from "react";

function About() {
    React.useEffect(() => {
        /**
         * @description Switching tab
         */
        function switchingTab() {
            var a = document.querySelectorAll("button");
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
        }
        switchingTab();
    }, []);
    return (
        <>
            <div className="font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex md:justify-center -mb-px whitespace-nowrap overflow-x-auto">
                    <li className="me-2 lg:me-4">
                        <button id="button-1" className="_button inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Experience</button>
                    </li>
                    <li className="me-2 lg:me-4">
                        <button id="button-2" className="_button inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Skills</button>
                    </li>
                    <li className="me-2 lg:me-4">
                        <button id="button-3" className="_button inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Education</button>
                    </li>
                    <li className="me-2 lg:me-4">
                        <button id="button-4" className="_button inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Certifications</button>
                    </li>
                </ul>
            </div>
            <div className="mt-8 bg-gray-800 w-full h-[200px] p-4 md:p-8">
                <div id="section1" className="_section">
                    <p>Experience</p>
                </div>
                <div id="section2" className="_section hidden">
                    <p>Skills</p>
                </div>
                <div id="section3" className="_section hidden">
                    <p>Educations</p>
                </div>
                <div id="section4" className="_section hidden">
                    <p>Certifications</p>
                </div>
            </div>
        </>
    );
}

export default About;