import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import ProfileImage from '../../assets/profilepic.jpg'

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greetings */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hii, I am
          </h1>
          {/* name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            SAGAR GAUD
          </h2>
          {/* Skill with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-300 mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                'Frontend Developer',
                'Java Developer',
                'Backend Developer',
                'Coder',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            ></Typewriter>
          </h3>
          <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            Hi, I am a passionate Java Developer and Full-Stack Web Developer with a strong interest in building scalable applications and solving real-world problems through clean and efficient code.I enjoy working with Java, Spring Boot, React, and modern web technologies, and I am constantly improving my skills in data structures, algorithms, and software design.
          </p>
          {/* Resume-Button */}
          <a href='https://acrobat.adobe.com/id/urn:aaid:sc:ap:0a2a47d3-fc0d-40b1-9ea0-4225e1c97d54'
            target='_blank'
            rel='noopener noreferer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transitiond urarion-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg,#facc15,#fde047)',
              boxShadow: '0 0 2px #facc15,0 2x #facc15,0 0 4px #facc15',
            }}>
            DOWNLOAD CV
          </a>
        </div>
        {/* Right side profile pic */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className='w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-yellow-400 rounded-full'
            tiltMaxangleX={20}
            tiltMaxangleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroScope={true} >
            <img src={ProfileImage} alt='Sagar' className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px-rgba(130,69,236,0.5)]' />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
