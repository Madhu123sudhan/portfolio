import websiteImg1 from "../assets/Campinggrounds.png";
import websiteImg2 from "../assets/Landingpage.png";
import websiteImg3 from "../assets/CurserControl.png";

export default function Projects() {
    const config = {
        projects : [
            {
                image: websiteImg1,
                description:'YelpCamp - Campground Review Platform Built with Node.js, Express.js, MongoDB, MapTiler and Passport.js.',
                link: 'https://github.com/Madhu123sudhan/Camping-'
            },
            {
                image: websiteImg2,
                description: 'Medical Information Landing Page Created using Next.js, TypeScript, and Tailwind CSS for a responsive and user-friendly design.',
                link: 'https://github.com/Madhu123sudhan/My-React-Nextjs'
            },
            {
                image: websiteImg3,
                description: 'Facial Expression Mouse Control Using Machine Learning Built with Python, OpenCV, Dlib, and TensorFlow.',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }
    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-3xl border-b-4 border-red-700 mb-5 w-max font-bold">
                        Projects
                    </h1>
                    <p className="text-bold">
                        These are some of my best projects. I have built these with React, MERN and vanilla CSS.  Check them out.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img className='h-[200px] w-[500px] border-2 border-red-500' alt="image.png" rel="noopener noreferrer" src={project.image}/>
                            <div className='project-desc'>
                               <p className='text-center px-5 py-5'>{project.description}</p>
                               <div className='flex justify-center'>
                                   <a className='btn' target='_blank' href={project.link}>View Project</a>
                               </div>
                            </div>
                        </div>
                    ))}    
                </div>
            </div>
        </section>
    )
}