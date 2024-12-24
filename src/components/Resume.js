// import ResumeImg from "../assets/resume.jpg";

// export default function Resume() {

//     return (
//         <section className="flex flex-col md:flex-row bg-primary px-5 py-12" id="resume">
//             {/* Left Image Section */}
//             <div className="md:w-1/2 py-5 flex justify-center md:justify-end">
//                 <img src={ResumeImg} alt="Resume-img" className="w-[300px] rounded-lg shadow-lg" />
//             </div>
//             {/* Right Skills Section */}
//             <div className="md:w-1/2 flex md:justify-center">
//                <div className="flex flex-col justify-center text-white">
//                     <h1 className="text-3xl border-b-4 border-red-700 mb-5 w-max font-bold">Resume</h1>
//                     <p className="pb-5">You can view my resume <a className="btn" href="#">Download</a></p>
//                </div>
//             </div>
//         </section>
//     );
// }

import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1KjXUWblLse5TV2nYkCT_H7XRKwd_fEgO/view?usp=drive_link'
    }
    return (
        <section className="flex flex-col md:flex-row bg-secondary px-5 py-12 items-center md:items-center" id="resume">
            <div className="md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
                <img
                    src={ResumeImg}
                    alt="Resume"
                    className="w-[250px] md:w-[300px] rounded-lg shadow-lg  border-2 border-red-500"
                />
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-center text-center md:text-left text-white">
                <div className="flex flex-col">
                    <h1 className="text-3xl border-b-4 border-red-700 mb-5 w-max font-bold">
                        Resume
                    </h1>
                    <p className="pb-5 text-lg">
                        You can view my resume by clicking the button below:
                    </p>
                    <a
                        className="btn" target='_blank'
                        href={config.link}
                    >
                        Download
                    </a>
                </div>
            </div>
        </section>
    );
}
