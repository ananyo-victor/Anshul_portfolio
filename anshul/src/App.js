import React, { useState } from 'react';
import './index.css';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import About from './components/About';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-white w-screen-2xl h-fit relative">
      <header className="container mx-auto h-16 lg:px-5 fixed top-0 bg-gray-900 z-20">
        <nav className="h-full w-full">
          <div className="mx-auto lg:hidden flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <div className="text-2xl font-bold">Portfolio</div>
            <button data-collapse-toggle="navbar-sticky" type="button" aria-controls="navbar-sticky" aria-expanded={isOpen ? "true" : "false"} onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div
              className={`${isOpen ? 'block' : 'hidden'
                } w-full md:block md:w-auto`}
              id="navbar-sticky"
            >
              <ul className="mt-4 flex flex-col rounded-lg border text-gray-200 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse border-gray-700 bg-gray-900/90">
                <li>
                  <a
                    href="#about"
                    className="block rounded px-3 py-2 text-gray-200 md:border-0 md:p-0 hover:bg-blue-600"
                    aria-current="page" onClick={handleToggle}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skill"
                    className="block rounded px-3 py-2 text-gray-200 md:border-0 md:p-0 hover:bg-blue-600" onClick={handleToggle}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="block rounded px-3 py-2 text-gray-200 md:border-0 md:p-0 hover:bg-blue-600" onClick={handleToggle}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="block rounded px-3 py-2 text-gray-200 md:border-0 md:p-0 hover:bg-blue-600" onClick={handleToggle}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="block rounded px-3 py-2 text-gray-200 md:border-0 md:p-0 hover:bg-blue-600" onClick={handleToggle}
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:flex hidden justify-between items-center h-full">
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="w-fit">
              <a href="#about" className="text-gray-300 hover:text-white mx-4 text-lg">
                About
              </a>
              <a href="#skill" className="text-gray-300 hover:text-white mx-4 text-lg">
                Skills
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white mx-4 text-lg">
                Experience
              </a>
              <a href="#project" className="text-gray-300 hover:text-white mx-4 text-lg">
                Projects
              </a>
              <a href="#education" className="text-gray-300 hover:text-white mx-4 text-lg">
                Education
              </a>
            </div>
            <a
              href="https://github.com/your-profile"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-lg"
            >
              Github Profile
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto min-h-screen h-fit">
        <div className="flex flex-col items-center text-center w-full h-full">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
        </div>
      </main>
      <footer className="container mx-auto p-6 text-center">
        <p>&copy; 2030 Harsh Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
