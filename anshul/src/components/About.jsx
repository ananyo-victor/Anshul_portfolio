import React from 'react'
import avatar from '../images/hehe.jpeg' // Ensure you have an avatar.png in the src directory
import Typewriter from './Typewriter';

function About() {
    const words = ['Developer', 'Designer', 'Creator', 'Full Stack Developer'];
    return (
        <div id='about' className='lg:h-screen max-h-fit text-white w-full bg-gradient-to-br from-purple-950 via-black to-blue-950'>
            <section className='container mx-auto lg:w-[70%]'>
                <div className='h-16 w-full'></div>
                <div>
                    {/* <AnimatedSVG/> */}
                </div>
                <div className='flex lg:flex-row flex-col-reverse w-full items-center'>

                    <div id='left' className="lg:w-1/2 lg:h-full flex flex-col lg:items-start items-center justify-center">
                        <h2 className="lg:text-5xl text-4xl font-bold my-1">Hi, I am</h2>
                        <h1 className="lg:text-6xl text-5xl font-bold my-1">Anshul Gupta</h1>
                        <p className="lg:text-4xl text-3xl font-bold my-1 mt-4">I am a <span className='text-purple-600'><Typewriter words={words} /></span></p>
                        <p className="mt-10 mx-6 lg:mx-0 lg:text-left lg:text-lg text-xl">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                        <button className="mt-10 size-fit lg:text-2xl text-xl font-bold bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-3xl"><a href="/">Check Resume</a></button>
                    </div>

                    <div id='right' className='lg:w-1/2 lg:h-full flex items-center justify-center lg:p-20 p-16'>
                        <div className='max-h-1/2 max-w-full border-4 border-purple-700 rounded-3xl p-5 drop-shadow-[0_0_50px_rgba(109,40,217,0.85)] bg-gray-900'>
                            <img src={avatar} alt="Avatar" className="rounded-2xl h-full" />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
