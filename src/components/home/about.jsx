import React from "react";

function About() {
    React.useEffect(() => {
        /**
         * @description Switching tab
         */
        function switchingTab() {
            var a = document.querySelectorAll("#switch_btn button");
            if (a) {
                for (let e = 0; e < a.length; e++)
                    a[e].onclick = function () {
                        var t = document.querySelectorAll("#sections section");
                        for (let o = 0; o < t.length; o++)
                            if ("" != t[o].innerHTML) {
                                (t[o].style.display = "none"),
                                    (document.querySelectorAll(
                                        "." + a[e].innerHTML.toLowerCase() + "-container"
                                    )[0].style.display = "block");
                                var l = document.querySelectorAll("#switch_btn button");
                                for (let e = 0; e < l.length; e++) l[e].classList.remove("active");
                                a[e].classList.add("active");
                            }
                    };
            }
        }
        switchingTab();
    }, []);
    return (
        <>
            <div className="font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap justify-center -mb-px">
                    <li className="me-2 lg:me-4">
                        <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Experience</a>
                    </li>
                    <li className="me-2 lg:me-4">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Skills</a>
                    </li>
                    <li className="me-2 lg:me-4">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Education</a>
                    </li>
                    <li className="me-2 lg:me-4">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Certifications</a>
                    </li>
                </ul>
            </div>
            <div className="mt-8 bg-gray-800 w-full h-[200px]">

            </div>
        </>
    );
}

export default About;