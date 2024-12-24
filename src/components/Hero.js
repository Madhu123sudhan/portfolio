import HeroImg from "../assets/hero.png";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { TbBrandLeetcode } from "react-icons/tb";

export default function Hero() {
    const config  = {
        subtitle: 'A motivated computer science graduate with a passion for web development and problem-solving.',
        social: {
            linkedin: 'https://www.linkedin.com/in/madhusudhan30/',
            GitHub: 'https://github.com/Madhu123sudhan',
            LeetCode: 'https://leetcode.com/u/MadhuSudhan2002/',
        },
        contact: {
            email : 'madhusudhan93436@gmail.com',
            phone: '+91 63805 17874',
            location: ' Chennai, Tamil Nadu, India'
        }
    }

    return (
        <section className="flex flex-col-reverse md:flex-row px-5 py-32 bg-primary items-center md:items-center justify-center" id="hero">
            {/* Left Text Section */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-red-600 text-4xl md:text-5xl font-hero-font mb-4">
                    Welcome To My Portfolio!
                </h1>
                <h2 className="text-white text-3xl md:text-4xl font-hero-font mb-4">
                    I'm MadhuSudhan
                </h2>
                <p className="text-gray-500 text-lg md:text-2xl hover:text-white transition-colors mb-6">
                   {config.subtitle}
                </p>
                {/* Contact Information */}
                <div className="flex flex-col gap-2 mb-6">
                    <a
                        href="#"
                        className="flex items-center text-gray-500 hover:text-white transition-colors"
                    >
                        <PhoneIcon className="h-5 mr-2" />
                        {config.contact.phone}
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new"
                        target='_blank'
                        className="flex items-center text-gray-500 hover:text-white transition-colors"
                    >
                        <EnvelopeIcon className="h-5 mr-2" />
                        {config.contact.email}
                    </a>
                    <a
                        href="#"
                        className="flex items-center text-gray-500 hover:text-white transition-colors"
                    >
                        <MapPinIcon className="h-5 mr-2" />
                        {config.contact.location}
                    </a>
                </div>
                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-6">
                    <a
                        href={config.social.linkedin}
                        className="text-gray-500 hover:text-white transition-colors"
                        target='_blank'
                    >
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <a
                        href={config.social.GitHub}
                        className="text-gray-500 hover:text-white transition-colors"
                        target='_blank'
                    >
                        <AiOutlineGithub size={30} />
                    </a>
                    <a
                        href={config.social.LeetCode}
                        className="text-gray-500 hover:text-white transition-colors"
                        target='_blank'
                    >
                        <TbBrandLeetcode size={30} />
                    </a>
                </div>
            </div>
            {/* Right Image Section */}
            <div className="md:w-1/3 flex justify-center md:justify-end mb-10 md:mb-0">
                <img
                    className="w-3/4 md:w-full max-w-xs md:max-w-md rounded-lg shadow-lg"
                    src={HeroImg}
                    alt="Hero"
                />
            </div>
        </section>
    );
}

