import React, { useEffect } from 'react'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

    };

    const menuLabel = [
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "project", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-30 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className='text-white flex py-5 justify-between items-center'>
                {/* Logo */}
                <div className='text-lg font-semibold cursor-pointer'>
                    <span className='text-yellow-400'>&lt;</span>
                    <span className='text-white'>SAGAR</span>
                    <span className='text-yellow-400'>/</span>
                    <span className='text-white'>GAUD</span>
                    <span className='text-yellow-400'>&gt;</span>
                </div>
                {/*Desktop Menu */}
                <ul className="md:flex space-x-8 text-gray-300 hidden">
                    {menuLabel.map((item) => (
                        <li key={item.id} className={'cursor-pointer '}>
                            <button className={'hover:underline hover:decoration-yellow-400 transition duration-300 ${activeSection == item.id ? underline-decoration-yellow :  ""}'} onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className=' hidden md:flex space-x-4'>
                    <a href="https://github.com/Sagargd4"
                        target='_blank'
                        rel='noopener noreferer'
                        className='text-gray-300 hover:text-yellow-500'
                    >
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/sagar-gaud-320b92214/"
                        target='_blank'
                        rel='noopener noreferer'
                        className='text-gray-300 hover:text-yellow-500'
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <div className='md:hidden'>
                    {
                        isOpen ? (<FiX className='text-3xl text-yellow-400 cursor-pointer' onClick={() => setIsOpen(false)} />)
                            : (
                                <FiMenu className='text-3xl text-yellow-400 cursor-pointer' onClick={() => setIsOpen(true)} />
                            )
                    }
                </div>
            </div>
            {
                isOpen && (
                    <div className="absolute top-16 left-1/2 tranform -translate-x-1/2 w-4/5 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg z-50 md:hidden">
                        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                            {menuLabel.map((item) => (
                                <li
                                    key={item.id}
                                    className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-yellow-400" : ""
                                        }`}
                                >
                                    <button onClick={() => handleMenuItemClick(item.id)}>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <div className='flex  space-x-4'>
                                <a href="https://github.com/Sagargd4"
                                    target='_blank'
                                    rel='noopener noreferer'
                                    className='text-gray-300 hover:text-white'
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a href="www.linkedin.com/in/sagar-gaud-320b92214/"
                                    target='_blank'
                                    rel='noopener noreferer'
                                    className='text-gray-300 hover:text-white'
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </ul>
                    </div>
                )
            }

        </nav>

    )
}

export default Navbar