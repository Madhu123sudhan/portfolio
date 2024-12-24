// import AboutImg from "../assets/about.png";
// import {
//     FaPython,
//     FaHtml5,
//     FaCss3Alt,
//     FaJs,
//     FaReact,
//     FaNodeJs,
//     FaBootstrap,
// } from "react-icons/fa";
// import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

// export default function About() {
//     const skills = [
//         { icon: <FaPython className="text-blue-500"/>, name: "Python", level: "Advanced" },
//         { icon: <FaHtml5 className="text-orange-600"/>, name: "HTML", level: "Advanced" },
//         { icon: <FaCss3Alt className="text-blue-600"/>, name: "CSS", level: "Advanced" },
//         { icon: <FaJs className="text-yellow-400"/>, name: "JavaScript", level: "Intermediate" },
//         { icon: <FaReact className="text-teal-600"/>, name: "React.js", level: "Intermediate" },
//         { icon: <FaNodeJs className="text-green-700"/>, name: "Node.js", level: "Intermediate" },
//         { icon: <SiMongodb className="text-green-600"/>, name: "MongoDB", level: "Intermediate" },
//         { icon: <SiMysql className="text-lime-200"/>, name: "MySQL", level: "Advanced" },
//         { icon: <FaBootstrap className="text-purple-800"/>, name: "Bootstrap", level: "Intermediate" },
//         { icon: <SiTailwindcss className="text-blue-500"/>, name: "TailwindCSS", level: "Advanced" },
//     ];

//     return (
//         <section className="flex flex-col md:flex-row bg-primary px-5 py-12" id="about">
//             {/* Left Image Section */}
//             <div className="md:w-1/2 flex justify-center items-center">
//                 <img src={AboutImg} alt="About-img" className="max-w-full rounded-lg shadow-lg" />
//             </div>
//             {/* Right Skills Section */}
//             <div className="md:w-1/2 flex flex-col justify-center">
//                 <h1 className="text-3xl text-white border-b-4 border-red-700 mb-5 w-max font-bold">
//                     About Skills
//                 </h1>
//                 <p className="text-red-500 text-2xl text-bold mb-5">
//                      I am very familiar with the following technologies & Skills: 
//                 </p>
//                 {/* Skills Grid */}
//                 <div className="grid grid-cols-5 gap-4 mb-5">
//                     {skills.map((skill, index) => (
//                         <div
//                             key={index}
//                             className="bg-gray-600 text-white p-4 rounded-lg flex flex-col items-center hover:bg-red-600 transition-all duration-300"
//                         >
//                             <div className="text-4xl mb-2">{skill.icon}</div>
//                             <h3 className="font-bold">{skill.name}</h3>
//                             <p className="text-sm">{skill.level}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <p className="text-gray-400 text-2xl text-bold mb-5">
//                     I have used these skills to build dynamic and user-friendly web applications, and I’m always excited to expand my knowledge and tackle new challenges.
//                 </p>
//             </div>
//         </section>
//     );
// }

import AboutImg from "../assets/about.png";
import {
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

export default function About() {
    const skills = [
        { icon: <FaPython className="text-blue-500" />, name: "Python", level: "Advanced" },
        { icon: <FaHtml5 className="text-orange-600" />, name: "HTML", level: "Advanced" },
        { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS", level: "Advanced" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", level: "Intermediate" },
        { icon: <FaReact className="text-teal-600" />, name: "React.js", level: "Intermediate" },
        { icon: <FaNodeJs className="text-green-700" />, name: "Node.js", level: "Intermediate" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB", level: "Intermediate" },
        { icon: <SiMysql className="text-lime-200" />, name: "MySQL", level: "Advanced" },
        { icon: <FaBootstrap className="text-purple-800" />, name: "Bootstrap", level: "Intermediate" },
        { icon: <SiTailwindcss className="text-blue-500" />, name: "TailwindCSS", level: "Advanced" },
    ];
    const config  = {
        line1: 'About Skills',
        line2: 'I am very familiar with the following technologies & Skills:',
        line3: 'I have used these skills to build dynamic and user-friendly web applications, and I’m always excited to expand my knowledge and tackle new challenges.'
    }


    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5 py-12" id="about">
            {/* Left Image Section */}
            <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                <img src={AboutImg} alt="About-img" className="max-w-full rounded-lg shadow-lg" />
            </div>
            {/* Right Skills Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-3xl text-white border-b-4 border-red-700 mb-5 w-max font-bold">
                    {config.line1}
                </h1>
                <p className="text-red-500 text-lg md:text-2xl font-semibold mb-5">
                    {config.line2}
                </p>
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-600 text-white p-4 rounded-lg flex flex-col items-center hover:bg-red-600 transition-all duration-300"
                        >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <h3 className="font-bold">{skill.name}</h3>
                            <p className="text-sm">{skill.level}</p>
                        </div>
                    ))}
                </div>
                <p className="text-gray-400 text-lg md:text-2xl font-semibold">
                    {config.line3}
                </p>
            </div>
        </section>
    );
}






